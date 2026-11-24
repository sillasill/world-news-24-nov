# The World in One Day — Tuesday, 24 November 2026

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/sillasill/world-news-24-nov/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/sillasill/world-news-24-nov/reward.svg)](https://make.fun/bounty/news-image-20261124)

A front page that sums up the world's news of Tuesday, 24 November 2026 in
one image: the COP31 climate talks ending with no deal, Nvidia's 31% surge
as Jensen Huang returns as CEO, a deadly strike near Kyiv, the factory fire
in Serang, Indonesia, and India's $1.62 billion package for Nepal — plus a
ticker of the day's other stories.

Bounty: [Sum up 24 November's world news in one image](https://make.fun/bounty/news-image-20261124)

## Stories covered

- **COP31 ends with no deal** — the climate talks in Antalya, Türkiye,
  closed without agreement after two weeks, split over fossil fuels.
- **Nvidia soars 31%** — Jensen Huang is reinstated as CEO and the shares
  jump, lifting the Nasdaq 6.5% in a relief rally.
- **Strike kills 11 near Kyiv** — a drone hits flats in Dymer; Zelensky
  urges the US to speed up Patriot missile deliveries.
- **24 dead in factory fire** — rescuers still search for about 30 missing
  after the blaze at a candy factory in Serang, Banten, Indonesia.
- **India gives Nepal $1.62bn** — a flood-recovery package agreed in
  New Delhi during Prime Minister Shah's visit.
- **Also today** — Seoul's cabinet reshuffle and first woman spy chief;
  Iranian attacks on Bahrain wound two; Seoul denies an Iran war role.

## How it works

`entry.png` is the finished front page: five realistic photo panels, one
for each lead story, with every headline, label, date and ticker line drawn
on top in crisp type. `main.ts` (Node 22, standard library only) copies
`entry.png` to the output directory, checks the JPEG markers are intact,
and verifies the written bytes match the source exactly.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## A note on the photos

The photo panels are realistic renderings made for this entry, not
archival news photographs. The facts in the headlines were checked against
reporting dated 23–24 November 2026.
