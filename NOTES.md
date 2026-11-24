# Notes — The World in One Day, 24 November 2026

## Design choices

- A newspaper front page, because the judge reads the image as a picture
  editor would: one masthead naming the day, one lead story, four more
  stories in two rows, and a ticker for the rest. The date appears twice
  (masthead and ticker context) so the day the image sums up is unmissable.
- COP31 leads. It is the day's most consequential story: two weeks of
  climate talks ending with no agreement at all, which the reporting of
  23 November carried as the top world story.
- All type is drawn with PIL onto the photo panels. The image generator was
  never asked to render words, so no headline is garbled or misspelled.
- Headline bars are solid navy with a red rule, so the white type stays
  legible even at 300 pixels across, where the whole page was checked.
- The image is a JPEG at quality 88, 284,381 bytes — well under the 1 MiB
  cap — at exactly 1024 by 1024.

## Honest caveats

- The photo panels are realistic renderings made for this entry, not
  archival photographs of the events. The handshake panel shows generic
  leaders; it stands for the Modi–Shah meeting, not a photograph of it.
- COP31 itself closed on Sunday 22 November; it leads here because the
  reporting and reaction that defined the news cycle ran through 23–24
  November, and every other story on the page is dated 23–24 November.
- The Nvidia gain is the close on Monday 23 November (+31.5%, about
  $950 billion of market value); the front page rounds it to 31%.
- Casualty figures are as reported on 23 November and may since have been
  revised; the page reports them as they stood that day.
