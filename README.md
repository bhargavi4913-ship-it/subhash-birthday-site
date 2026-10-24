# Subhaaaaashuuu Birthday Website 🎂

A responsive, playful birthday memory website made with HTML, CSS, and JavaScript.

## Preview it on your computer
1. Extract this ZIP.
2. Open the folder.
3. Double-click `index.html` to open it in Chrome.

## Add your photos
1. Copy your pictures into the `photos` folder.
2. Open `script.js` in Notepad or VS Code.
3. Find the `const memories = [` section at the top.
4. Add entries using this format (change filenames and wording):

```js
const memories = [
  {
    image: "photos/first-day.jpg",
    tag: "THE BEGINNING",
    title: "The day the lore began",
    caption: "Our story started here 💗"
  },
  {
    image: "photos/funny-selfie.jpg",
    tag: "CERTIFIED NONSENSE",
    title: "Zero brain cells, 10/10 fun",
    caption: "I still laugh when I remember this 😂"
  }
];
```

5. Make sure the filenames and file extensions exactly match your photos.
6. Save the file and refresh `index.html`.

You can use JPG, PNG, or WebP images. Use shorter captions that feel like your inside jokes.
If `memories` contains at least one item, the example placeholders are replaced by your photos.

## Included videos and photos
The intro uses `Intro video.mp4`. The first memory spot uses `first impression.mp4` with its original audio unchanged. The Darling instrumental remains a separate soundtrack. The second photo is `cute.jpeg`, and the third is `moment .jpeg`. Keep these files beside `index.html` and include them when sharing or publishing the website.

## Add background music
The included `Darling Instrumental.mp3` starts when the visitor clicks **Open your birthday surprise**. The top-bar button pauses or resumes it. The separate soundtrack pauses during first-impression video playback so the video's original audio can be heard clearly. Keep the MP3 beside `index.html` when sharing or publishing the website.

## Personalize the letter
Open `index.html`, search for `TO MY FAVOURITE SUBHA`, and edit the paragraphs in the letter section. Keep the message honest and true to your friendship.

## Publish a shareable link with GitHub Pages (free)
You need a GitHub account. Keep all files and folders together.

1. Go to https://github.com and sign in or create an account.
2. Click the `+` button (top-right) → **New repository**.
3. Name it `subhaaaaashuuu-birthday`. Set it to **Public** (required for free GitHub Pages on a free account), then create it.
4. On the new repository page, choose **Add file → Upload files**.
5. Upload `index.html`, `style.css`, `script.js`, and any `photos`, `music`, and `videos` folders you use. Upload the *contents* of this project folder so `index.html` is at the repository root, not buried inside another folder.
6. Click **Commit changes**.
7. Open **Settings → Pages**.
8. Under **Build and deployment**, select **Deploy from a branch**. Choose branch `main` and folder `/(root)`, then click **Save**.
9. Wait a few minutes and refresh the Pages screen. GitHub will show your website URL, usually:
   `https://YOUR-USERNAME.github.io/subhaaaaashuuu-birthday/`
10. Open the URL in a private/incognito window or on your phone to test it, then send it to him.

### Privacy note
A public GitHub Pages site can be viewed by anyone who has the URL, and repository files are public. Don't upload private, sensitive, or embarrassing photos/messages. If you want more privacy, use a hosting service with access controls or share a local copy instead.

## Last-minute checklist
- [ ] Check his nickname spelling.
- [ ] Add a few favourite photos and captions.
- [ ] Edit the letter so it sounds like you.
- [ ] Test the letter button, confetti, mobile layout, and music button.
- [ ] Publish and test the link on your phone before sending it.
