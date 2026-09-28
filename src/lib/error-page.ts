export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Temporarily Unavailable — Envo Peace Foundation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
        padding: 1.5rem;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background-color: #f7faf8;
        color: #122119;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      }
      .card {
        max-width: 32rem;
        width: 100%;
        background: #ffffff;
        border: 1px solid #e2eae5;
        border-radius: 1.25rem;
        padding: 2.5rem;
        text-align: center;
        box-shadow: 0 10px 30px -10px rgba(27, 77, 62, 0.15);
      }
      .badge {
        display: inline-block;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #1b4d3e;
        background: #eef6f2;
        padding: 0.35rem 0.85rem;
        border-radius: 9999px;
        margin-bottom: 1.25rem;
      }
      h1 {
        font-size: 1.5rem;
        font-weight: 800;
        margin: 0 0 0.75rem;
        color: #122119;
      }
      p {
        color: #4b6355;
        line-height: 1.6;
        font-size: 0.95rem;
        margin: 0 0 2rem;
      }
      .actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      a, button {
        padding: 0.75rem 1.5rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .primary {
        background: #1b4d3e;
        color: #ffffff;
        border: none;
      }
      .primary:hover {
        background: #143b2f;
      }
      .secondary {
        background: #ffffff;
        color: #122119;
        border: 1px solid #d2ded7;
      }
      .secondary:hover {
        background: #f7faf8;
      }
      .contact-note {
        margin-top: 2rem;
        font-size: 0.8rem;
        color: #728c7f;
      }
      .contact-note a {
        padding: 0;
        border-radius: 0;
        color: #1b4d3e;
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="badge">Envo Peace & Development Foundation</div>
      <h1>This page could not be loaded</h1>
      <p>We encountered an unexpected technical issue while preparing this page. Please try refreshing or return to the main homepage.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Refresh Page</button>
        <a class="secondary" href="/">Return Home</a>
      </div>
      <div class="contact-note">
        Direct support: <a href="mailto:hello@envopeace.org">hello@envopeace.org</a> · +234 806 356 3604
      </div>
    </div>
  </body>
</html>`;
}
