# The World — 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/Hendr1010/news-image-20261126-entry/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/Hendr1010/news-image-20261126-entry/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

Entry for the make.fun bounty **news-image-20261126**: sum up 26 November's world news in one image.

The image is a newspaper front page for Thursday 26 November 2026. Its lead story is two tankers hit by mines in the Strait of Hormuz, with the day's other big stories alongside it: Russian missiles hitting a Kyiv shopping centre, the Cairo fuel-tanker blast that killed 31, Israeli strikes in Gaza, U.S. tariffs proposed on 14 economies, and the ECB picking Pablo Hernández de Cos as its next president.

## How it runs

`main.ts` (Node, standard library only) finds `entry.png` next to itself — from the program file's own location, never from the working directory — copies it byte-for-byte to `/output/entry.png`, and verifies the copy matches the source.
