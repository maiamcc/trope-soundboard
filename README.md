# Trope Soundboard

An entirely goofy bare-bones website to teach trope with, I guess

## What's in here?
- the barest-bones of websites at `index.html`
- stylesheet at `styles.css`; make changes here to change the appearance and layout of the site
- Javascript and data in `scripts.js`; this is where we populate the page with buttons and configure their behavior (play/pause etc.), as well as where we store the master list of what buttons to show, in what groupings, with what text/audio file
- audio files all live in the `audio/` directory

## How to use
It shoulllld Just Work(tm) to add items to the `filesAndTitles` object in `scripts.js` and get new buttons on the page.

The `filesAndTitles` object looks like this:
```
filesAndTitles = [
  {
    'Orchestra': 'orchestra.wav',
    'Cheer': 'cheer.wav',
    'Game over': 'game-over.wav',
  },
  {
    'אֶתְנַחְתָּ֑א': 'cheer.wav',
    'אָלֶף־בֵּית עִבְרִי': 'game-over.wav',
  }
];
```
It's a list of dictionary objects. Each dictionary in the list represents a row of buttons (with a "play all" option at the end). Each item in the dictionary pairs the button text with the sound file that button should play. (Paths are relative to the `/audio` directory; thus e.g. the `orchestra.wav` path given in the example will be treated as the full path `/audio/orchestra.wav` in the code.)

### "Developing" locally
"Developing" in quotes because I'm not sure this really counts as developing, but there you go.

When you have the contents of this repository downloaded onto your computer, you should be able to open `index.html` in any web browser, then make changes in `scripts.js` / `styles.css`, save, and refresh the page in your browser to see the updates.

If you're changing styling, consider using your browser's [dev tools](https://developer.chrome.com/docs/devtools) to poke aroud and preview before making that change in the actual `styles.css` file. If you're working on the site and see unexpected behavior, stuff not showing up, etc., check the _console_ in your dev tools, as sometimes error messages show up there.

When you're satisfied with a round of changes, push them up to GitHub—you can do this in hard mode from the terminal or use a program with an actual interface, e.g. [GitHub Desktop](https://github.com/apps/desktop). Then, if you have [GitHub Pages](https://pages.github.com/) set up correctly, your changes should soon be available at your GitHub Pages URL.
