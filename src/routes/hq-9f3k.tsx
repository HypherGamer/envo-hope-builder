import React, { useState, useEffect } from "react";
import { createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import {
  adminLogout,
} from "@/lib/admin-auth.server";
import {
  getAdminOverviewData,
  getAdminOutreachList,
  saveAdminOutreach,
  deleteAdminOutreach,
  getAdminTeamList,
  saveAdminTeamMember,
  reorderAdminTeam,
  getAdminDonationSettings,
  saveAdminDonationSettings,
  getAdminSiteSettings,
  saveAdminSiteSettings,
  getAdminHomeSettings,
  saveAdminHomeSettings,
  getAdminStoriesList,
  saveAdminStory,
  getAdminFaqsList,
  saveAdminFaq,
  getAdminGalleryList,
  saveAdminGalleryItem,
  getAdminMessages,
  updateAdminMessageStatus,
  getAdminAuditLogs,
  uploadAdminImage,
  type OutreachItem,
  type TeamItem,
  type DonationSettings,
  type SiteSettings,
  type HomeSettings,
  type StoryItem,
  type FaqItem,
  type GalleryItem,
  type InboxMessage,
  type AuditLogEntry,
  type ItemStatus,
} from "@/lib/content.server";
import { maskAccountNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  LayoutDashboard,
  FileText,
  Users,
  CreditCard,
  Settings,
  Home,
  BookOpen,
  HelpCircle,
  Image as ImageIcon,
  Inbox,
  Activity,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  Archive,
  RefreshCw,
  Eye,
  CheckCircle,
  AlertTriangle,
  Upload,
  ArrowUp,
  ArrowDown,
  Mail,
  Phone,
  Calendar,
  MapPin,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/hq-9f3k")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Management Console" },
    ],
  }),
  loader: async () => {
    try {
      const overview = await getAdminOverviewData();
      return { admin: { email: overview.adminEmail, uid: "admin" }, overview };
    } catch {
      // Non-admins must receive an identical 404 to ensure obscure existence
      throw notFound();
    }
  },
  component: AdminDashboardPage,
});

type TabKey =
  | "overview"
  | "outreach"
  | "team"
  | "donation"
  | "site"
  | "home"
  | "stories"
  | "faqs"
  | "gallery"
  | "inbox"
  | "audit";

function AdminDashboardPage() {
  const { admin } = Route.useLoaderData();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<TabKey>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sign out handler
  const handleSignOut = async () => {
    try {
      await adminLogout();
      toast.success("Signed out successfully");
      navigate({ to: "/" });
    } catch {
      navigate({ to: "/" });
    }
  };

  const navTabs: Array<{ key: TabKey; label: string; icon: typeof LayoutDashboard }> = [
    { key: "overview", label: "Overview", icon: LayoutDashboard },
    { key: "outreach", label: "Outreach & Field", icon: FileText },
    { key: "team", label: "Team Members", icon: Users },
    { key: "donation", label: "Bank & Donation", icon: CreditCard },
    { key: "site", label: "Site & Contact", icon: Settings },
    { key: "home", label: "Homepage Hero", icon: Home },
    { key: "stories", label: "Impact Stories", icon: BookOpen },
    { key: "faqs", label: "FAQs", icon: HelpCircle },
    { key: "gallery", label: "Photo Gallery", icon: ImageIcon },
    { key: "inbox", label: "Messages Inbox", icon: Inbox },
    { key: "audit", label: "Audit Activity", icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 text-foreground flex flex-col md:flex-row antialiased">
      {/* Sidebar for Desktop */}
      <aside className="w-full md:w-64 bg-card border-r border-border shrink-0 flex flex-col justify-between p-4 shadow-sm">
        <div>
          {/* Dashboard Header */}
          <div className="px-3 py-4 border-b border-border/60 mb-4 flex items-center justify-between">
            <div>
              <h1 className="text-base font-extrabold text-foreground tracking-tight flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                Management Console
              </h1>
              <p className="text-[11px] text-muted-foreground truncate max-w-[190px] mt-0.5">
                {admin.email}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((p) => !p)}
              className="md:hidden rounded-lg p-1.5 border border-border"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`space-y-1 ${mobileMenuOpen ? "block" : "hidden md:block"}`}>
            {navTabs.map(({ key, label, icon: Icon }) => {
              const active = currentTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setCurrentTab(key);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Footer & Sign Out */}
        <div className="pt-4 border-t border-border/60 mt-6">
          <Button
            type="button"
            onClick={handleSignOut}
            variant="ghost"
            size="sm"
            className="w-full justify-start text-xs text-destructive hover:bg-destructive/10 hover:text-destructive gap-2 cursor-pointer font-semibold"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 max-w-6xl overflow-y-auto">
        {currentTab === "overview" && <OverviewTab onNavigate={setCurrentTab} />}
        {currentTab === "outreach" && <OutreachTab />}
        {currentTab === "team" && <TeamTab />}
        {currentTab === "donation" && <DonationTab />}
        {currentTab === "site" && <SiteTab />}
        {currentTab === "home" && <HomeTab />}
        {currentTab === "stories" && <StoriesTab />}
        {currentTab === "faqs" && <FaqsTab />}
        {currentTab === "gallery" && <GalleryTab />}
        {currentTab === "inbox" && <InboxTab />}
        {currentTab === "audit" && <AuditTab />}
      </main>
    </div>
  );
}

// ==========================================
// 1. OVERVIEW TAB
// ==========================================

function OverviewTab({ onNavigate }: { onNavigate: (tab: TabKey) => void }) {
  const [data, setData] = useState<{
    totalOutreach: number;
    publishedOutreach: number;
    draftOutreach: number;
    totalTeam: number;
    totalMessages: number;
    unreadMessages: number;
    recentAudits: AuditLogEntry[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminOverviewData()
      .then((res) => setData(res))
      .catch((err) => toast.error("Failed to load overview data: " + err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-sm text-muted-foreground">Loading dashboard overview...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Executive Dashboard</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome to the foundation content management workspace. Real-time changes are reflected across the website.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          onClick={() => onNavigate("inbox")}
          className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between text-muted-foreground text-xs font-semibold uppercase">
            <span>Inbox Messages</span>
            <Inbox className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 text-3xl font-extrabold text-foreground">{data?.totalMessages || 0}</p>
          <p className="mt-1 text-xs text-primary font-bold">
            {data?.unreadMessages || 0} unread {data?.unreadMessages === 1 ? "inquiry" : "inquiries"}
          </p>
        </div>

        <div
          onClick={() => onNavigate("outreach")}
          className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between text-muted-foreground text-xs font-semibold uppercase">
            <span>Outreach Missions</span>
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 text-3xl font-extrabold text-foreground">{data?.totalOutreach || 0}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            <strong className="text-foreground">{data?.publishedOutreach || 0}</strong> published • {data?.draftOutreach || 0} drafts
          </p>
        </div>

        <div
          onClick={() => onNavigate("team")}
          className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between text-muted-foreground text-xs font-semibold uppercase">
            <span>Team Members</span>
            <Users className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 text-3xl font-extrabold text-foreground">{data?.totalTeam || 0}</p>
          <p className="mt-1 text-xs text-muted-foreground">Leadership & field personnel</p>
        </div>

        <div
          onClick={() => onNavigate("donation")}
          className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between text-muted-foreground text-xs font-semibold uppercase">
            <span>Bank & Donation</span>
            <CreditCard className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 text-base font-extrabold text-foreground">Verified Details</p>
          <p className="mt-1 text-xs text-primary font-semibold">Protected by 2-step confirm</p>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
          Quick Management Actions
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => onNavigate("outreach")} variant="default" size="sm" className="gap-2 cursor-pointer">
            <Plus className="h-4 w-4" /> New Outreach Report
          </Button>
          <Button onClick={() => onNavigate("donation")} variant="outline" size="sm" className="gap-2 cursor-pointer">
            <CreditCard className="h-4 w-4" /> Update Bank Account
          </Button>
          <Button onClick={() => onNavigate("site")} variant="outline" size="sm" className="gap-2 cursor-pointer">
            <Settings className="h-4 w-4" /> Announcement Banner
          </Button>
          <Button onClick={() => onNavigate("inbox")} variant="outline" size="sm" className="gap-2 cursor-pointer">
            <Inbox className="h-4 w-4" /> Review Form Inquiries
          </Button>
        </div>
      </div>

      {/* Recent Audit Log Snippet */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Recent Administrative Activity
          </h3>
          <Button onClick={() => onNavigate("audit")} variant="ghost" size="sm" className="text-xs text-primary font-bold cursor-pointer">
            View All Logs
          </Button>
        </div>

        <div className="divide-y divide-border/60">
          {data?.recentAudits && data.recentAudits.length > 0 ? (
            data.recentAudits.map((a) => (
              <div key={a.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono font-bold text-primary mr-2 uppercase">{a.action}</span>
                  <span className="text-foreground/90">{a.afterSummary || a.target}</span>
                </div>
                <div className="text-muted-foreground font-mono">
                  {new Date(a.timestamp).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-muted-foreground py-2">No activity recorded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. OUTREACH TAB
// ==========================================

function OutreachTab() {
  const [items, setItems] = useState<OutreachItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState<Partial<OutreachItem> | null>(null);
  const [deleteItem, setDeleteItem] = useState<OutreachItem | null>(null);
  const [deleteConfirmTitle, setDeleteConfirmTitle] = useState("");
  const [saving, setSaving] = useState(false);

  const loadItems = () => {
    setLoading(true);
    getAdminOutreachList()
      .then(setItems)
      .catch((err) => toast.error("Error loading outreach: " + err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadItems();
  }, []);

  const filtered = items.filter((item) => {
    const matchesFilter = statusFilter === "all" || item.status === statusFilter;
    const matchesSearch =
      search.trim().length === 0 ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem?.title || !editItem.slug || !editItem.summary || !editItem.body) {
      toast.error("Please fill in all required fields (title, slug, summary, body)");
      return;
    }

    setSaving(true);
    try {
      await saveAdminOutreach({
        data: {
          id: editItem.id,
          slug: editItem.slug,
          title: editItem.title,
          date: editItem.date || new Date().toISOString().split("T")[0],
          location: editItem.location || "Ebonyi State, Nigeria",
          summary: editItem.summary,
          body: editItem.body,
          program: editItem.program || "outreach",
          status: editItem.status || "draft",
          images: editItem.images || [],
        },
      });
      toast.success("Outreach report saved successfully");
      setEditItem(null);
      loadItems();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to save outreach report");
    } finally {
      setSaving(false);
    }
  };

  const handleDeletePermanent = async () => {
    if (!deleteItem) return;
    try {
      await deleteAdminOutreach({
        data: {
          id: deleteItem.id,
          confirmedTitle: deleteConfirmTitle,
        },
      });
      toast.success("Outreach permanently deleted");
      setDeleteItem(null);
      setDeleteConfirmTitle("");
      loadItems();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Deletion failed");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Outreach & Field Records</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Create, edit, and publish verified community mission logs with images.
          </p>
        </div>
        <Button
          onClick={() =>
            setEditItem({
              title: "",
              slug: "",
              date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
              location: "Abakaliki, Ebonyi State",
              summary: "",
              body: "",
              program: "outreach",
              status: "draft",
              images: [],
            })
          }
          className="gap-2 cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Create Outreach Report
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <Input
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs rounded-xl text-xs"
        />
        <div className="flex gap-1.5 bg-card p-1 rounded-xl border border-border">
          {["all", "published", "draft", "archived"].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${
                statusFilter === st ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Outreach List Table */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        {loading ? (
          <div className="p-8 text-center text-sm text-muted-foreground">Loading outreach records...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">No outreach records found in this view.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-secondary/50 text-muted-foreground font-bold uppercase tracking-wider border-b border-border">
                <tr>
                  <th className="p-4">Title & Location</th>
                  <th className="p-4">Program</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-xs flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-primary" /> {item.location}
                      </p>
                    </td>
                    <td className="p-4 capitalize font-semibold text-primary">{item.program}</td>
                    <td className="p-4 text-muted-foreground">{item.date}</td>
                    <td className="p-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-bold uppercase text-[10px] ${
                          item.status === "published"
                            ? "bg-green-500/15 text-green-700 dark:text-green-400"
                            : item.status === "draft"
                              ? "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-1.5 whitespace-nowrap">
                      {item.status === "published" && (
                        <a
                          href={`/outreach/${item.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary"
                          title="View Live Page"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setEditItem(item)}
                        className="inline-flex items-center p-1.5 text-primary hover:text-primary-deep rounded-lg hover:bg-primary-soft cursor-pointer"
                        title="Edit Item"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      {item.status !== "archived" ? (
                        <button
                          type="button"
                          onClick={async () => {
                            await saveAdminOutreach({ data: { ...item, status: "archived" } });
                            toast.success("Archived outreach item");
                            loadItems();
                          }}
                          className="inline-flex items-center p-1.5 text-amber-600 hover:text-amber-700 rounded-lg hover:bg-amber-50 cursor-pointer"
                          title="Archive"
                        >
                          <Archive className="h-4 w-4" />
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={async () => {
                              await saveAdminOutreach({ data: { ...item, status: "draft" } });
                              toast.success("Restored to draft");
                              loadItems();
                            }}
                            className="inline-flex items-center p-1.5 text-green-600 hover:text-green-700 rounded-lg hover:bg-green-50 cursor-pointer"
                            title="Restore"
                          >
                            <RefreshCw className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setDeleteItem(item);
                              setDeleteConfirmTitle("");
                            }}
                            className="inline-flex items-center p-1.5 text-destructive hover:text-destructive/80 rounded-lg hover:bg-destructive/10 cursor-pointer"
                            title="Permanently Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit / Create Dialog */}
      {editItem && (
        <Dialog open={Boolean(editItem)} onOpenChange={(open) => !open && setEditItem(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editItem.id ? "Edit Outreach Mission" : "New Outreach Mission"}</DialogTitle>
              <DialogDescription>
                Fill out the field report details. Markdown formatting is supported in the body.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSave} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Title *</Label>
                  <Input
                    required
                    value={editItem.title || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEditItem((p) => ({
                        ...p,
                        title: val,
                        slug: p?.slug || val.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                      }));
                    }}
                    placeholder="e.g. Clean Water & Grain Relief Mission in Ishielu"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>URL Slug *</Label>
                  <Input
                    required
                    value={editItem.slug || ""}
                    onChange={(e) => setEditItem((p) => ({ ...p, slug: e.target.value }))}
                    placeholder="e.g. ishielu-relief-mission"
                    className="mt-1 font-mono text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label>Date Label *</Label>
                  <Input
                    required
                    value={editItem.date || ""}
                    onChange={(e) => setEditItem((p) => ({ ...p, date: e.target.value }))}
                    placeholder="e.g. April 2026 or 15 April 2026"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Location *</Label>
                  <Input
                    required
                    value={editItem.location || ""}
                    onChange={(e) => setEditItem((p) => ({ ...p, location: e.target.value }))}
                    placeholder="e.g. Ntezi, Ishielu LGA"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Program Pillar</Label>
                  <select
                    value={editItem.program || "outreach"}
                    onChange={(e) => setEditItem((p) => ({ ...p, program: e.target.value }))}
                    className="w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                  >
                    <option value="outreach">Outreach & Relief</option>
                    <option value="education">Educational Support</option>
                    <option value="healthcare">Healthcare Assistance</option>
                    <option value="youth">Youth Empowerment</option>
                    <option value="community">Community Development</option>
                    <option value="general">General Foundation</option>
                  </select>
                </div>
              </div>

              <div>
                <Label>Summary (Short abstract for cards & SEO) *</Label>
                <Textarea
                  required
                  rows={2}
                  value={editItem.summary || ""}
                  onChange={(e) => setEditItem((p) => ({ ...p, summary: e.target.value }))}
                  placeholder="2-3 sentence overview of what was accomplished..."
                  className="mt-1 text-sm"
                />
              </div>

              <div>
                <Label>Full Body Content (Markdown supported) *</Label>
                <Textarea
                  required
                  rows={8}
                  value={editItem.body || ""}
                  onChange={(e) => setEditItem((p) => ({ ...p, body: e.target.value }))}
                  placeholder="Write full article here. Use ## for subheadings, - for bullet points, > for quotes..."
                  className="mt-1 font-mono text-xs"
                />
                <p className="text-[11px] text-muted-foreground mt-1">
                  Tip: Markdown headings (##), lists (- item), bold (**text**), and blockquotes (&gt; quote) are rendered safely.
                </p>
              </div>

              {/* Image Manager */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-2">
                  <Label className="font-bold">Images (Cover + Gallery)</Label>
                  <ImageUploadButton
                    onUploaded={(url, alt) => {
                      setEditItem((p) => ({
                        ...p,
                        images: [...(p?.images || []), { url, alt, caption: "" }],
                      }));
                    }}
                  />
                </div>

                <div className="space-y-3 mt-3">
                  {editItem.images?.map((img, idx) => (
                    <div key={idx} className="flex gap-3 items-center bg-secondary/40 p-3 rounded-xl border border-border">
                      <img src={img.url} alt={img.alt} className="h-12 w-16 object-cover rounded-lg shrink-0 bg-muted" />
                      <div className="flex-1 space-y-1">
                        <Input
                          placeholder="Image URL"
                          value={img.url}
                          onChange={(e) => {
                            const updated = [...(editItem.images || [])];
                            updated[idx].url = e.target.value;
                            setEditItem((p) => ({ ...p, images: updated }));
                          }}
                          className="h-7 text-xs"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            placeholder="Alt text (required) *"
                            value={img.alt}
                            onChange={(e) => {
                              const updated = [...(editItem.images || [])];
                              updated[idx].alt = e.target.value;
                              setEditItem((p) => ({ ...p, images: updated }));
                            }}
                            className="h-7 text-xs"
                          />
                          <Input
                            placeholder="Caption (optional)"
                            value={img.caption || ""}
                            onChange={(e) => {
                              const updated = [...(editItem.images || [])];
                              updated[idx].caption = e.target.value;
                              setEditItem((p) => ({ ...p, images: updated }));
                            }}
                            className="h-7 text-xs"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = editItem.images?.filter((_, i) => i !== idx);
                          setEditItem((p) => ({ ...p, images: updated }));
                        }}
                        className="text-destructive p-1 hover:bg-destructive/10 rounded"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditItem((p) => ({
                        ...p,
                        images: [...(p?.images || []), { url: "", alt: "", caption: "" }],
                      }));
                    }}
                    className="text-xs"
                  >
                    + Add Image URL Manually
                  </Button>
                </div>
              </div>

              <div>
                <Label>Publication Status</Label>
                <select
                  value={editItem.status || "draft"}
                  onChange={(e) => setEditItem((p) => ({ ...p, status: e.target.value as ItemStatus }))}
                  className="w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm font-semibold"
                >
                  <option value="draft">Draft (Admin only)</option>
                  <option value="published">Published (Visible on site)</option>
                  <option value="archived">Archived (Hidden)</option>
                </select>
              </div>

              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setEditItem(null)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={saving} className="gap-2">
                  {saving ? "Saving..." : "Save Outreach Report"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* Permanent Delete Confirmation Dialog */}
      {deleteItem && (
        <Dialog open={Boolean(deleteItem)} onOpenChange={(open) => !open && setDeleteItem(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-2">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <DialogTitle className="text-center">Permanent Deletion</DialogTitle>
              <DialogDescription className="text-center text-xs">
                This action cannot be undone. To permanently delete this outreach report, please type the exact title:
                <strong className="block text-foreground mt-2 font-bold p-2 bg-secondary rounded-lg select-all">
                  {deleteItem.title}
                </strong>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 pt-2">
              <Input
                placeholder="Type title to confirm..."
                value={deleteConfirmTitle}
                onChange={(e) => setDeleteConfirmTitle(e.target.value)}
                className="text-xs"
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setDeleteItem(null)}>
                Cancel
              </Button>
              <Button
                type="button"
                variant="destructive"
                disabled={deleteConfirmTitle.trim() !== deleteItem.title.trim()}
                onClick={handleDeletePermanent}
              >
                Permanently Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// ==========================================
// 3. TEAM TAB
// ==========================================

function TeamTab() {
  const [team, setTeam] = useState<TeamItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editMember, setEditMember] = useState<Partial<TeamItem> | null>(null);
  const [saving, setSaving] = useState(false);

  const loadTeam = () => {
    setLoading(true);
    getAdminTeamList()
      .then(setTeam)
      .catch((err) => toast.error("Error loading team: " + err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadTeam();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editMember?.name || !editMember.role || !editMember.department || !editMember.bio) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSaving(true);
    try {
      await saveAdminTeamMember({
        data: {
          id: editMember.id,
          name: editMember.name,
          role: editMember.role,
          department: editMember.department,
          bio: editMember.bio,
          order: editMember.order ?? team.length,
          status: editMember.status || "published",
          isFounder: editMember.isFounder,
          photo: editMember.photo,
        },
      });
      toast.success("Team member saved");
      setEditMember(null);
      loadTeam();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to save team member");
    } finally {
      setSaving(false);
    }
  };

  const moveOrder = async (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= team.length) return;

    const newTeam = [...team];
    const temp = newTeam[index];
    newTeam[index] = newTeam[targetIndex];
    newTeam[targetIndex] = temp;

    const items = newTeam.map((item, idx) => ({ id: item.id, order: idx }));
    setTeam(newTeam);

    try {
      await reorderAdminTeam({ data: { items } });
      toast.success("Team order updated");
    } catch {
      loadTeam();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Team & Board Members</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage the foundation leadership, trustees, and field coordinators displayed on the About page.
          </p>
        </div>
        <Button
          onClick={() =>
            setEditMember({
              name: "",
              role: "",
              department: "Executive Leadership",
              bio: "",
              order: team.length,
              status: "published",
              isFounder: false,
            })
          }
          className="gap-2 cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Add Team Member
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        {loading ? (
          <div className="p-8 text-center text-sm text-muted-foreground">Loading team records...</div>
        ) : team.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">No team records found.</div>
        ) : (
          <div className="divide-y divide-border/60">
            {team.map((member, index) => (
              <div key={member.id} className="p-4 flex items-center justify-between gap-4 hover:bg-secondary/20 transition-colors">
                <div className="flex items-center gap-4">
                  {/* Order Controls */}
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => moveOrder(index, "up")}
                      className="p-1 rounded hover:bg-secondary disabled:opacity-30 cursor-pointer"
                    >
                      <ArrowUp className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={index === team.length - 1}
                      onClick={() => moveOrder(index, "down")}
                      className="p-1 rounded hover:bg-secondary disabled:opacity-30 cursor-pointer"
                    >
                      <ArrowDown className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Photo or Initials Avatar */}
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0 border border-border">
                    {member.photo?.url ? (
                      <img src={member.photo.url} alt={member.photo.alt || member.name} className="h-full w-full object-cover" />
                    ) : (
                      member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
                    )}
                  </div>

                  <div>
                    <p className="font-bold text-foreground text-sm flex items-center gap-2">
                      {member.name}
                      {member.isFounder && (
                        <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                          Founder
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-primary font-semibold">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.department}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-bold uppercase text-[10px] ${
                      member.status === "published"
                        ? "bg-green-500/15 text-green-700 dark:text-green-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {member.status}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditMember(member)}
                    className="cursor-pointer"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Team Member Dialog */}
      {editMember && (
        <Dialog open={Boolean(editMember)} onOpenChange={(open) => !open && setEditMember(null)}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editMember.id ? "Edit Team Member" : "Add Team Member"}</DialogTitle>
              <DialogDescription>Enter full official details and profile photo.</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSave} className="space-y-4 pt-2">
              <div>
                <Label>Full Name *</Label>
                <Input
                  required
                  value={editMember.name || ""}
                  onChange={(e) => setEditMember((p) => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. Dr. Ngozi Eze"
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Role / Title *</Label>
                <Input
                  required
                  value={editMember.role || ""}
                  onChange={(e) => setEditMember((p) => ({ ...p, role: e.target.value }))}
                  placeholder="e.g. Director of Programs"
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Department *</Label>
                <Input
                  required
                  value={editMember.department || ""}
                  onChange={(e) => setEditMember((p) => ({ ...p, department: e.target.value }))}
                  placeholder="e.g. Program Management"
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Biographical Summary *</Label>
                <Textarea
                  required
                  rows={4}
                  value={editMember.bio || ""}
                  onChange={(e) => setEditMember((p) => ({ ...p, bio: e.target.value }))}
                  placeholder="2-4 sentences describing their professional background..."
                  className="mt-1 text-sm"
                />
              </div>

              {/* Photo Input & Upload */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-2">
                  <Label>Photo URL</Label>
                  <ImageUploadButton
                    onUploaded={(url, alt) => {
                      setEditMember((p) => ({ ...p, photo: { url, alt: alt || editMember.name || "Photo" } }));
                    }}
                  />
                </div>
                <Input
                  placeholder="Paste URL or upload using button above"
                  value={editMember.photo?.url || ""}
                  onChange={(e) => {
                    const url = e.target.value;
                    setEditMember((p) => ({
                      ...p,
                      photo: url ? { url, alt: p?.name || "Team Member" } : undefined,
                    }));
                  }}
                  className="text-xs"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isFounder"
                  checked={Boolean(editMember.isFounder)}
                  onChange={(e) => setEditMember((p) => ({ ...p, isFounder: e.target.checked }))}
                  className="h-4 w-4 rounded border-gray-300 text-primary"
                />
                <Label htmlFor="isFounder" className="cursor-pointer font-medium">
                  Mark as Founder & Board Chairman
                </Label>
              </div>

              <div>
                <Label>Status</Label>
                <select
                  value={editMember.status || "published"}
                  onChange={(e) => setEditMember((p) => ({ ...p, status: e.target.value as ItemStatus }))}
                  className="w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm font-semibold"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setEditMember(null)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Save Member"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// ==========================================
// 4. DONATION & BANK TAB (2-Step Confirmation & Resend Alert)
// ==========================================

function DonationTab() {
  const [settings, setSettings] = useState<DonationSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmedAccountInput, setConfirmedAccountInput] = useState("");

  const [formBankName, setFormBankName] = useState("");
  const [formAccountName, setFormAccountName] = useState("");
  const [formAccountNumber, setFormAccountNumber] = useState("");
  const [formAccountType, setFormAccountType] = useState("");
  const [formExtraNote, setFormExtraNote] = useState("");
  const [formSuggestedAmounts, setFormSuggestedAmounts] = useState("5000, 15000, 35000, 75000, 150000");

  const loadSettings = () => {
    setLoading(true);
    getAdminDonationSettings()
      .then((data) => {
        setSettings(data);
        setFormBankName(data.bankName || "");
        setFormAccountName(data.accountName || "");
        setFormAccountNumber(data.accountNumber || "");
        setFormAccountType(data.accountType || "");
        setFormExtraNote(data.extraNote || "");
        setFormSuggestedAmounts((data.suggestedAmounts || [5000, 15000, 35000, 75000, 150000]).join(", "));
      })
      .catch((err) => toast.error("Error loading donation settings: " + err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleOpenConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = formAccountNumber.replace(/\s+/g, "");

    // Check 10-digit NUBAN guideline
    if (cleanNumber && cleanNumber.length !== 10) {
      toast.warning("Notice: Nigerian NUBAN bank accounts are typically 10 digits.");
    }

    setConfirmedAccountInput("");
    setConfirmOpen(true);
  };

  const handleSaveConfirmed = async () => {
    const cleanNumber = formAccountNumber.replace(/\s+/g, "");
    const cleanConfirm = confirmedAccountInput.replace(/\s+/g, "");

    if (cleanNumber && cleanNumber !== cleanConfirm) {
      toast.error("Confirmation account number does not match.");
      return;
    }

    const amounts = formSuggestedAmounts
      .split(",")
      .map((s) => Number(s.trim()))
      .filter((n) => !isNaN(n) && n > 0);

    setSaving(true);
    try {
      await saveAdminDonationSettings({
        data: {
          bankName: formBankName,
          accountName: formAccountName,
          accountNumber: cleanNumber,
          accountType: formAccountType,
          extraNote: formExtraNote,
          suggestedAmounts: amounts.length > 0 ? amounts : [5000, 15000, 35000, 75000, 150000],
          confirmedAccountNumber: cleanConfirm,
        },
      });
      toast.success("Bank details updated and security alert dispatched.");
      setConfirmOpen(false);
      loadSettings();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to update bank details");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-sm text-muted-foreground">Loading donation settings...</div>;
  }

  const oldMasked = maskAccountNumber(settings?.accountNumber);
  const newMasked = maskAccountNumber(formAccountNumber);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Official Bank Account & Donation Details</h2>
        <p className="text-sm text-muted-foreground mt-1">
          These details are displayed in the global donation popup and on the /donate page.
        </p>
      </div>

      {/* Security Info Card */}
      <div className="rounded-2xl border border-primary/20 bg-primary-soft/30 p-4 flex items-start gap-3 text-xs text-foreground/90">
        <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <p>
          <strong>Security Notice:</strong> Any modification to the foundation bank account number requires two-step re-entry confirmation and automatically sends an email security alert to all authorized admin email addresses.
        </p>
      </div>

      <form onSubmit={handleOpenConfirm} className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Bank Name</Label>
            <Input
              value={formBankName}
              onChange={(e) => setFormBankName(e.target.value)}
              placeholder="e.g. Zenith Bank Plc"
              className="mt-1"
            />
          </div>
          <div>
            <Label>Account Name</Label>
            <Input
              value={formAccountName}
              onChange={(e) => setFormAccountName(e.target.value)}
              placeholder="e.g. Envo Peace and Development Foundation"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Account Number (Digits only)</Label>
            <Input
              value={formAccountNumber}
              onChange={(e) => setFormAccountNumber(e.target.value.replace(/[^\d\s]/g, ""))}
              placeholder="e.g. 1012345678"
              className="mt-1 font-mono text-base font-bold tracking-wider"
            />
            <p className="text-[11px] text-muted-foreground mt-1">
              Current Active: <strong>{oldMasked}</strong>
            </p>
          </div>
          <div>
            <Label>Account Type Note (Optional)</Label>
            <Input
              value={formAccountType}
              onChange={(e) => setFormAccountType(e.target.value)}
              placeholder="e.g. Official NGO Operational Account"
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label>Extra Note / Guidance for Donors</Label>
          <Textarea
            rows={2}
            value={formExtraNote}
            onChange={(e) => setFormExtraNote(e.target.value)}
            placeholder="e.g. Please include your name or 'Donation' in the transfer narration for swift reconciliation."
            className="mt-1 text-sm"
          />
        </div>

        <div>
          <Label>Suggested Amounts in Naira (Comma-separated)</Label>
          <Input
            value={formSuggestedAmounts}
            onChange={(e) => setFormSuggestedAmounts(e.target.value)}
            placeholder="5000, 15000, 35000, 75000, 150000"
            className="mt-1 text-xs font-mono"
          />
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
          <Button type="submit" className="gap-2 cursor-pointer">
            <CheckCircle className="h-4 w-4" /> Save Bank Details
          </Button>
        </div>
      </form>

      {/* Confirmation Dialog */}
      {confirmOpen && (
        <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 mb-2">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <DialogTitle className="text-center">Confirm Bank Account Modification</DialogTitle>
              <DialogDescription className="text-center text-xs">
                Please verify the account change. An alert email will be sent to all administrators.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 pt-2 text-xs">
              <div className="rounded-xl border border-border bg-secondary/40 p-3 space-y-1.5">
                <p>
                  <span className="text-muted-foreground">Previous Account:</span> <strong>{oldMasked}</strong>
                </p>
                <p>
                  <span className="text-muted-foreground">New Account:</span> <strong className="text-primary font-bold">{newMasked}</strong>
                </p>
                <p>
                  <span className="text-muted-foreground">Bank:</span> {formBankName || "None"}
                </p>
              </div>

              <div>
                <Label className="font-bold text-foreground">
                  Re-enter Account Number to Confirm *
                </Label>
                <Input
                  required
                  placeholder="Re-type new account number..."
                  value={confirmedAccountInput}
                  onChange={(e) => setConfirmedAccountInput(e.target.value)}
                  className="mt-1 font-mono text-sm font-bold"
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setConfirmOpen(false)}>
                Cancel
              </Button>
              <Button
                type="button"
                disabled={saving || (formAccountNumber.trim() !== "" && confirmedAccountInput.trim() !== formAccountNumber.trim())}
                onClick={handleSaveConfirmed}
                className="gap-2"
              >
                {saving ? "Saving & Alerting..." : "Confirm & Apply"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// ==========================================
// 5. SITE & CONTACT TAB
// ==========================================

function SiteTab() {
  const [site, setSite] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getAdminSiteSettings()
      .then(setSite)
      .catch((err) => toast.error("Error loading site settings: " + err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!site) return;

    setSaving(true);
    try {
      await saveAdminSiteSettings({
        data: {
          phone: site.phone,
          email: site.email,
          address: site.address,
          officeHours: site.officeHours,
          socials: site.socials || {},
          announcement: site.announcement || { enabled: false, text: "" },
        },
      });
      toast.success("Site settings and announcement updated");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to update site settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !site) {
    return <div className="p-8 text-center text-sm text-muted-foreground">Loading site settings...</div>;
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Site & Secretariat Settings</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage foundation secretariat contact details, social links, and the top announcement banner.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Announcement Banner Box */}
        <div className="rounded-2xl border-2 border-primary/30 bg-card p-6 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-foreground">Top Announcement Banner</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Displays a prominent bar at the very top of all public pages.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="bannerEnabled"
                checked={site.announcement?.enabled || false}
                onChange={(e) =>
                  setSite((p) =>
                    p ? { ...p, announcement: { ...p.announcement, enabled: e.target.checked } } : null,
                  )
                }
                className="h-5 w-5 rounded border-gray-300 text-primary cursor-pointer"
              />
              <Label htmlFor="bannerEnabled" className="font-bold text-sm cursor-pointer">
                {site.announcement?.enabled ? "Banner Active" : "Disabled"}
              </Label>
            </div>
          </div>

          <div>
            <Label>Announcement Message</Label>
            <Input
              value={site.announcement?.text || ""}
              onChange={(e) =>
                setSite((p) =>
                  p ? { ...p, announcement: { ...p.announcement, text: e.target.value } } : null,
                )
              }
              placeholder="e.g. Registration for August 2026 Youth Vocational Cohort is now open!"
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Action Link Label (Optional)</Label>
              <Input
                value={site.announcement?.linkLabel || ""}
                onChange={(e) =>
                  setSite((p) =>
                    p ? { ...p, announcement: { ...p.announcement, linkLabel: e.target.value } } : null,
                  )
                }
                placeholder="e.g. Apply Now or Read Details"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Action Link URL (Optional)</Label>
              <Input
                value={site.announcement?.linkUrl || ""}
                onChange={(e) =>
                  setSite((p) =>
                    p ? { ...p, announcement: { ...p.announcement, linkUrl: e.target.value } } : null,
                  )
                }
                placeholder="e.g. /get-involved or /outreach"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
          <h3 className="text-base font-bold text-foreground">Secretariat Contact Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Official Phone Number *</Label>
              <Input
                required
                value={site.phone || ""}
                onChange={(e) => setSite((p) => (p ? { ...p, phone: e.target.value } : null))}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Official Email Address *</Label>
              <Input
                required
                type="email"
                value={site.email || ""}
                onChange={(e) => setSite((p) => (p ? { ...p, email: e.target.value } : null))}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label>Physical Secretariat Address *</Label>
            <Input
              required
              value={site.address || ""}
              onChange={(e) => setSite((p) => (p ? { ...p, address: e.target.value } : null))}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Office Operating Hours</Label>
            <Input
              value={site.officeHours || ""}
              onChange={(e) => setSite((p) => (p ? { ...p, officeHours: e.target.value } : null))}
              className="mt-1"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
          <h3 className="text-base font-bold text-foreground">Social Media Profile Links</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Facebook URL</Label>
              <Input
                value={site.socials?.facebook || ""}
                onChange={(e) =>
                  setSite((p) =>
                    p ? { ...p, socials: { ...p.socials, facebook: e.target.value } } : null,
                  )
                }
                className="mt-1 text-xs"
              />
            </div>
            <div>
              <Label>X (Twitter) URL</Label>
              <Input
                value={site.socials?.x || ""}
                onChange={(e) =>
                  setSite((p) =>
                    p ? { ...p, socials: { ...p.socials, x: e.target.value } } : null,
                  )
                }
                className="mt-1 text-xs"
              />
            </div>
            <div>
              <Label>Instagram URL</Label>
              <Input
                value={site.socials?.instagram || ""}
                onChange={(e) =>
                  setSite((p) =>
                    p ? { ...p, socials: { ...p.socials, instagram: e.target.value } } : null,
                  )
                }
                className="mt-1 text-xs"
              />
            </div>
            <div>
              <Label>LinkedIn URL</Label>
              <Input
                value={site.socials?.linkedin || ""}
                onChange={(e) =>
                  setSite((p) =>
                    p ? { ...p, socials: { ...p.socials, linkedin: e.target.value } } : null,
                  )
                }
                className="mt-1 text-xs"
              />
            </div>
            <div>
              <Label>YouTube URL</Label>
              <Input
                value={site.socials?.youtube || ""}
                onChange={(e) =>
                  setSite((p) =>
                    p ? { ...p, socials: { ...p.socials, youtube: e.target.value } } : null,
                  )
                }
                className="mt-1 text-xs"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={saving} className="gap-2">
            {saving ? "Saving..." : "Save Site Settings"}
          </Button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// 6. HOMEPAGE TAB
// ==========================================

function HomeTab() {
  const [home, setHome] = useState<HomeSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getAdminHomeSettings()
      .then(setHome)
      .catch((err) => toast.error("Error loading home settings: " + err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!home) return;

    setSaving(true);
    try {
      await saveAdminHomeSettings({
        data: {
          heroHeadline: home.heroHeadline || "",
          heroSubline: home.heroSubline || "",
          headlineStats: home.headlineStats || [],
        },
      });
      toast.success("Homepage content updated");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to update homepage");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !home) {
    return <div className="p-8 text-center text-sm text-muted-foreground">Loading homepage settings...</div>;
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Homepage Hero & Key Metrics</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Customize the main landing hero messaging and headline impact statistics.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
          <h3 className="text-base font-bold text-foreground">Hero Text</h3>

          <div>
            <Label>Hero Headline (Leave empty to use built-in default)</Label>
            <Input
              value={home.heroHeadline || ""}
              onChange={(e) => setHome((p) => (p ? { ...p, heroHeadline: e.target.value } : null))}
              placeholder="Building peaceful communities and sustainable opportunities across Ebonyi State."
              className="mt-1"
            />
          </div>

          <div>
            <Label>Hero Subline</Label>
            <Textarea
              rows={3}
              value={home.heroSubline || ""}
              onChange={(e) => setHome((p) => (p ? { ...p, heroSubline: e.target.value } : null))}
              placeholder="A community-rooted NGO in Abakaliki, Ebonyi State advancing grassroots peace..."
              className="mt-1 text-sm"
            />
          </div>
        </div>

        {/* Headline Stats */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">Homepage Headline Stats</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setHome((p) =>
                  p
                    ? {
                        ...p,
                        headlineStats: [
                          ...(p.headlineStats || []),
                          { value: "100+", label: "New Metric", asOf: "2026" },
                        ],
                      }
                    : null,
                );
              }}
              className="text-xs"
            >
              + Add Stat
            </Button>
          </div>

          <div className="space-y-3">
            {home.headlineStats?.map((stat, idx) => (
              <div key={idx} className="flex gap-3 items-center bg-secondary/40 p-3 rounded-xl border border-border">
                <Input
                  placeholder="Value (e.g. 5,200)"
                  value={stat.value}
                  onChange={(e) => {
                    const updated = [...(home.headlineStats || [])];
                    updated[idx].value = e.target.value;
                    setHome((p) => (p ? { ...p, headlineStats: updated } : null));
                  }}
                  className="w-28 text-xs font-bold font-mono"
                />
                <Input
                  placeholder="Label (e.g. Households Supported)"
                  value={stat.label}
                  onChange={(e) => {
                    const updated = [...(home.headlineStats || [])];
                    updated[idx].label = e.target.value;
                    setHome((p) => (p ? { ...p, headlineStats: updated } : null));
                  }}
                  className="flex-1 text-xs"
                />
                <Input
                  placeholder="As of (e.g. April 2026)"
                  value={stat.asOf}
                  onChange={(e) => {
                    const updated = [...(home.headlineStats || [])];
                    updated[idx].asOf = e.target.value;
                    setHome((p) => (p ? { ...p, headlineStats: updated } : null));
                  }}
                  className="w-32 text-xs"
                />
                <button
                  type="button"
                  onClick={() => {
                    const updated = home.headlineStats?.filter((_, i) => i !== idx);
                    setHome((p) => (p ? { ...p, headlineStats: updated } : null));
                  }}
                  className="text-destructive p-1 hover:bg-destructive/10 rounded"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Homepage Content"}
          </Button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// 7. STORIES, FAQS, GALLERY TABS
// ==========================================

function StoriesTab() {
  const [stories, setStories] = useState<StoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editStory, setEditStory] = useState<Partial<StoryItem> | null>(null);
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    getAdminStoriesList()
      .then(setStories)
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editStory?.title || !editStory.beneficiary || !editStory.quote) {
      toast.error("Please fill required fields");
      return;
    }

    setSaving(true);
    try {
      await saveAdminStory({
        data: {
          id: editStory.id,
          title: editStory.title,
          beneficiary: editStory.beneficiary,
          location: editStory.location || "Ebonyi State",
          program: editStory.program || "Outreach",
          programSlug: editStory.programSlug || "outreach",
          summary: editStory.summary || "",
          quote: editStory.quote,
          outcomes: editStory.outcomes || [],
          asOf: editStory.asOf || "2026",
          order: editStory.order ?? stories.length,
          status: editStory.status || "published",
        },
      });
      toast.success("Story saved");
      setEditStory(null);
      load();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to save story");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Impact Stories</h2>
          <p className="text-sm text-muted-foreground mt-1">Beneficiary quotes and verified case studies.</p>
        </div>
        <Button
          onClick={() =>
            setEditStory({
              title: "",
              beneficiary: "",
              location: "Ishielu LGA",
              program: "Outreach Programs",
              programSlug: "outreach",
              summary: "",
              quote: "",
              outcomes: [""],
              asOf: "April 2026",
              order: stories.length,
              status: "published",
            })
          }
          className="gap-2 cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Add Story
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        {loading ? (
          <div className="p-8 text-center text-sm text-muted-foreground">Loading stories...</div>
        ) : stories.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">No stories in database yet. Built-in defaults are active.</div>
        ) : (
          <div className="divide-y divide-border/60">
            {stories.map((s) => (
              <div key={s.id} className="p-4 flex items-center justify-between hover:bg-secondary/20">
                <div>
                  <p className="font-bold text-foreground text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground italic">&ldquo;{s.quote.slice(0, 80)}...&rdquo;</p>
                  <p className="text-[11px] text-primary font-semibold mt-1">
                    {s.beneficiary} • {s.location} ({s.program})
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {s.status}
                  </span>
                  <Button variant="ghost" size="sm" onClick={() => setEditStory(s)}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {editStory && (
        <Dialog open={Boolean(editStory)} onOpenChange={(open) => !open && setEditStory(null)}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editStory.id ? "Edit Story" : "Add Beneficiary Story"}</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSave} className="space-y-4 pt-2">
              <div>
                <Label>Title *</Label>
                <Input
                  required
                  value={editStory.title || ""}
                  onChange={(e) => setEditStory((p) => ({ ...p, title: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Beneficiary Name *</Label>
                  <Input
                    required
                    value={editStory.beneficiary || ""}
                    onChange={(e) => setEditStory((p) => ({ ...p, beneficiary: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Location *</Label>
                  <Input
                    required
                    value={editStory.location || ""}
                    onChange={(e) => setEditStory((p) => ({ ...p, location: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label>Direct Quote *</Label>
                <Textarea
                  required
                  rows={3}
                  value={editStory.quote || ""}
                  onChange={(e) => setEditStory((p) => ({ ...p, quote: e.target.value }))}
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label>Summary</Label>
                <Textarea
                  rows={2}
                  value={editStory.summary || ""}
                  onChange={(e) => setEditStory((p) => ({ ...p, summary: e.target.value }))}
                  className="mt-1 text-sm"
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setEditStory(null)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Save Story"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function FaqsTab() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editFaq, setEditFaq] = useState<Partial<FaqItem> | null>(null);
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    getAdminFaqsList()
      .then(setFaqs)
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editFaq?.question || !editFaq.answer) return;

    setSaving(true);
    try {
      await saveAdminFaq({
        data: {
          id: editFaq.id,
          question: editFaq.question,
          answer: editFaq.answer,
          programSlug: editFaq.programSlug || "general",
          order: editFaq.order ?? faqs.length,
          status: editFaq.status || "published",
        },
      });
      toast.success("FAQ saved");
      setEditFaq(null);
      load();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to save FAQ");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Frequently Asked Questions</h2>
          <p className="text-sm text-muted-foreground mt-1">Questions and answers displayed on program and support pages.</p>
        </div>
        <Button
          onClick={() =>
            setEditFaq({
              question: "",
              answer: "",
              programSlug: "general",
              order: faqs.length,
              status: "published",
            })
          }
          className="gap-2 cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Add FAQ
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        {loading ? (
          <div className="p-8 text-center text-sm text-muted-foreground">Loading FAQs...</div>
        ) : faqs.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">No FAQs in database yet. Built-in defaults are active.</div>
        ) : (
          <div className="divide-y divide-border/60">
            {faqs.map((f) => (
              <div key={f.id} className="p-4 flex items-center justify-between hover:bg-secondary/20">
                <div className="pr-4">
                  <p className="font-bold text-foreground text-sm">{f.question}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{f.answer}</p>
                  <p className="text-[10px] text-primary font-bold uppercase mt-1">Pillar: {f.programSlug}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setEditFaq(f)}>
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {editFaq && (
        <Dialog open={Boolean(editFaq)} onOpenChange={(open) => !open && setEditFaq(null)}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editFaq.id ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSave} className="space-y-4 pt-2">
              <div>
                <Label>Question *</Label>
                <Input
                  required
                  value={editFaq.question || ""}
                  onChange={(e) => setEditFaq((p) => ({ ...p, question: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Answer *</Label>
                <Textarea
                  required
                  rows={4}
                  value={editFaq.answer || ""}
                  onChange={(e) => setEditFaq((p) => ({ ...p, answer: e.target.value }))}
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label>Program Slug</Label>
                <select
                  value={editFaq.programSlug || "general"}
                  onChange={(e) => setEditFaq((p) => ({ ...p, programSlug: e.target.value }))}
                  className="w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                >
                  <option value="general">General / All</option>
                  <option value="outreach">Outreach Programs</option>
                  <option value="education">Educational Support</option>
                  <option value="healthcare">Healthcare Assistance</option>
                  <option value="youth">Youth Empowerment</option>
                  <option value="community">Community Development</option>
                </select>
              </div>
              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setEditFaq(null)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Save FAQ"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function GalleryTab() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<Partial<GalleryItem> | null>(null);
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    getAdminGalleryList()
      .then(setGallery)
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem?.src || !editItem.alt) {
      toast.error("Image URL and Alt text are required");
      return;
    }

    setSaving(true);
    try {
      await saveAdminGalleryItem({
        data: {
          id: editItem.id,
          src: editItem.src,
          alt: editItem.alt,
          caption: editItem.caption || "",
          programSlug: editItem.programSlug || "general",
          order: editItem.order ?? gallery.length,
          status: editItem.status || "published",
        },
      });
      toast.success("Gallery photo saved");
      setEditItem(null);
      load();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to save photo");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Photo Gallery</h2>
          <p className="text-sm text-muted-foreground mt-1">Uploaded field pictures and community event photography.</p>
        </div>
        <Button
          onClick={() =>
            setEditItem({
              src: "",
              alt: "",
              caption: "",
              programSlug: "general",
              order: gallery.length,
              status: "published",
            })
          }
          className="gap-2 cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Add Photo
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="p-8 text-center text-sm text-muted-foreground col-span-3">Loading gallery...</div>
        ) : gallery.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground col-span-3">No photos uploaded to database yet. Built-in defaults are active.</div>
        ) : (
          gallery.map((g) => (
            <div key={g.id} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft flex flex-col">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-bold text-xs text-foreground line-clamp-1">{g.alt}</p>
                  {g.caption && <p className="text-[11px] text-muted-foreground italic line-clamp-2 mt-1">{g.caption}</p>}
                </div>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/40">
                  <span className="text-[10px] uppercase font-bold text-primary">{g.programSlug}</span>
                  <Button variant="ghost" size="sm" onClick={() => setEditItem(g)}>
                    <Edit2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {editItem && (
        <Dialog open={Boolean(editItem)} onOpenChange={(open) => !open && setEditItem(null)}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editItem.id ? "Edit Photo" : "Add Photo"}</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSave} className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <Label>Image Source</Label>
                <ImageUploadButton
                  onUploaded={(url, alt) => {
                    setEditItem((p) => ({ ...p, src: url, alt: alt || p?.alt || "Gallery Image" }));
                  }}
                />
              </div>
              <Input
                required
                placeholder="Image URL..."
                value={editItem.src || ""}
                onChange={(e) => setEditItem((p) => ({ ...p, src: e.target.value }))}
                className="text-xs"
              />

              <div>
                <Label>Alt Description (Required for Accessibility) *</Label>
                <Input
                  required
                  value={editItem.alt || ""}
                  onChange={(e) => setEditItem((p) => ({ ...p, alt: e.target.value }))}
                  placeholder="e.g. Beneficiaries receiving textbooks in Abakaliki"
                  className="mt-1 text-xs"
                />
              </div>

              <div>
                <Label>Caption (Optional)</Label>
                <Input
                  value={editItem.caption || ""}
                  onChange={(e) => setEditItem((p) => ({ ...p, caption: e.target.value }))}
                  placeholder="e.g. Annual educational distribution day."
                  className="mt-1 text-xs"
                />
              </div>

              <div>
                <Label>Program Pillar</Label>
                <select
                  value={editItem.programSlug || "general"}
                  onChange={(e) => setEditItem((p) => ({ ...p, programSlug: e.target.value }))}
                  className="w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                >
                  <option value="general">General Foundation</option>
                  <option value="outreach">Outreach Programs</option>
                  <option value="education">Educational Support</option>
                  <option value="healthcare">Healthcare Assistance</option>
                  <option value="youth">Youth Empowerment</option>
                  <option value="community">Community Development</option>
                </select>
              </div>

              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setEditItem(null)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Save Photo"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// ==========================================
// 8. INBOX TAB (Form Inquiries)
// ==========================================

function InboxTab() {
  const [messages, setMessages] = useState<InboxMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread" | "archived">("unread");
  const [activeMessage, setActiveMessage] = useState<InboxMessage | null>(null);

  const load = () => {
    setLoading(true);
    getAdminMessages()
      .then(setMessages)
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = messages.filter((m) => {
    if (filter === "unread") return !m.read && !m.archived;
    if (filter === "archived") return Boolean(m.archived);
    return !m.archived;
  });

  const handleToggleRead = async (msg: InboxMessage) => {
    const newStatus = !msg.read;
    try {
      await updateAdminMessageStatus({ data: { id: msg.id, read: newStatus } });
      setMessages((p) => p.map((m) => (m.id === msg.id ? { ...m, read: newStatus } : m)));
      toast.success(newStatus ? "Marked as read" : "Marked as unread");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to update");
    }
  };

  const handleToggleArchive = async (msg: InboxMessage) => {
    const newArchived = !msg.archived;
    try {
      await updateAdminMessageStatus({ data: { id: msg.id, archived: newArchived } });
      setMessages((p) => p.map((m) => (m.id === msg.id ? { ...m, archived: newArchived } : m)));
      setActiveMessage(null);
      toast.success(newArchived ? "Archived message" : "Restored from archive");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to archive");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Form Inquiries Inbox</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Incoming contact messages, volunteer applications, and partnership inquiries submitted through site forms.
          </p>
        </div>
        <div className="flex gap-1.5 bg-card p-1 rounded-xl border border-border">
          {(["unread", "all", "archived"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${
                filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        {loading ? (
          <div className="p-8 text-center text-sm text-muted-foreground">Loading inbox messages...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">No messages found in this category.</div>
        ) : (
          <div className="divide-y divide-border/60">
            {filtered.map((msg) => (
              <div
                key={msg.id}
                onClick={() => {
                  setActiveMessage(msg);
                  if (!msg.read) handleToggleRead(msg);
                }}
                className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors cursor-pointer ${
                  !msg.read ? "bg-primary/5 hover:bg-primary/10 font-medium" : "hover:bg-secondary/20"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {!msg.read && <span className="h-2 w-2 rounded-full bg-primary shrink-0" />}
                    <span className="font-bold text-foreground text-sm">{msg.name}</span>
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground uppercase">
                      {msg.reason || "General"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{msg.message}</p>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0 font-mono">
                  <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                  <a
                    href={`mailto:${msg.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg text-primary hover:bg-primary-soft"
                    title="Send Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Message Detail Dialog */}
      {activeMessage && (
        <Dialog open={Boolean(activeMessage)} onOpenChange={(open) => !open && setActiveMessage(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                <span>Category: {activeMessage.reason || "General Inquiry"}</span>
                <span>•</span>
                <span>{new Date(activeMessage.createdAt).toLocaleString()}</span>
              </div>
              <DialogTitle className="text-xl font-bold mt-1">{activeMessage.name}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 pt-2 text-sm">
              <div className="rounded-xl border border-border bg-secondary/30 p-3 space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                  <a href={`mailto:${activeMessage.email}`} className="font-bold text-primary hover:underline">
                    {activeMessage.email}
                  </a>
                </div>
                {activeMessage.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                    <a href={`tel:${activeMessage.phone}`} className="font-semibold text-foreground">
                      {activeMessage.phone}
                    </a>
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Message</p>
                <div className="rounded-xl border border-border bg-card p-4 text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
                  {activeMessage.message}
                </div>
              </div>
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleToggleArchive(activeMessage)}
                className="text-xs gap-1.5"
              >
                <Archive className="h-3.5 w-3.5" />
                {activeMessage.archived ? "Restore to Inbox" : "Archive"}
              </Button>
              <Button asChild variant="default" size="sm" className="gap-1.5">
                <a href={`mailto:${activeMessage.email}`}>
                  <Mail className="h-3.5 w-3.5" /> Reply by Email
                </a>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// ==========================================
// 9. AUDIT LOG TAB
// ==========================================

function AuditTab() {
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminAuditLogs()
      .then(setLogs)
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Security & Audit Activity Log</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Immutable audit trail of the latest 100 administrative actions, logins, and content updates.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        {loading ? (
          <div className="p-8 text-center text-sm text-muted-foreground">Loading audit records...</div>
        ) : logs.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">No audit entries recorded yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-secondary/50 text-muted-foreground font-bold uppercase tracking-wider border-b border-border">
                <tr>
                  <th className="p-4">Timestamp</th>
                  <th className="p-4">Action</th>
                  <th className="p-4">Target / Summary</th>
                  <th className="p-4">Admin Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 font-mono text-[11px]">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-secondary/20">
                    <td className="p-4 text-muted-foreground whitespace-nowrap">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>
                    <td className="p-4 font-bold text-primary uppercase">{log.action}</td>
                    <td className="p-4 font-sans text-xs text-foreground/90">
                      <div>
                        <strong>{log.target}</strong>
                        {log.afterSummary && <p className="text-muted-foreground text-[11px] mt-0.5">{log.afterSummary}</p>}
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{log.adminEmail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// IMAGE UPLOAD HELPER BUTTON
// ==========================================

function ImageUploadButton({ onUploaded }: { onUploaded: (url: string, alt: string) => void }) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (< 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File exceeds 5MB limit before processing");
      return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      toast.error("Please select a JPEG, PNG, or WebP image");
      return;
    }

    setUploading(true);
    try {
      // 1. Resize on client using HTML Canvas to max 1600px and encode as WebP (~0.8 quality)
      const base64 = await resizeImageToWebP(file, 1600, 0.8);

      // Prompt for accessible alt text
      const altPrompt = window.prompt("Enter an accessible description (alt text) for this image:", file.name.replace(/\.[^/.]+$/, ""));
      const altText = altPrompt?.trim() || "Field mission photography";

      // 2. Upload via Server function to Firebase Admin Storage
      const res = await uploadAdminImage({
        data: {
          base64Data: base64,
          contentType: "image/webp",
          alt: altText,
        },
      });

      if (res.success && res.url) {
        toast.success("Image uploaded successfully");
        onUploaded(res.url, altText);
      }
    } catch (err: unknown) {
      console.error("Upload error:", err);
      toast.error(err instanceof Error ? err.message : "Upload failed. You can paste an image URL instead.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  return (
    <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/80 hover:bg-secondary text-xs font-semibold text-foreground cursor-pointer shadow-sm">
      <Upload className="h-3.5 w-3.5 text-primary" />
      <span>{uploading ? "Processing..." : "Upload Image"}</span>
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
        disabled={uploading}
        className="hidden"
      />
    </label>
  );
}

/**
 * Resizes an image file using Canvas to max length and encodes to WebP Base64 string
 */
function resizeImageToWebP(file: File, maxDimension: number, quality: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas context could not be created"));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/webp", quality);
        const base64 = dataUrl.split(",")[1];
        resolve(base64);
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
