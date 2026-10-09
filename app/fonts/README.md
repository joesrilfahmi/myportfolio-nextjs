# Self-hosted fonts

Latin-subset variable fonts, both licensed under the SIL Open Font License 1.1
(full text in the `*-OFL.txt` files next to them).

| File                          | Family        | Use         |
| ----------------------------- | ------------- | ----------- |
| `Inter-Variable.woff2`        | Inter         | Body and UI |
| `SpaceGrotesk-Variable.woff2` | Space Grotesk | Headings    |

They come from the `@fontsource-variable/inter` and
`@fontsource-variable/space-grotesk` packages (`latin-wght-normal` files) and
are loaded in `app/layout.tsx` with `next/font/local`, so the site makes no
request to Google Fonts. To add another script (e.g. Latin Extended), copy the
matching `*-wght-normal.woff2` from the same packages.
