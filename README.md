# Will Andrew – Portfolio

My portfolio site, built with plain HTML and CSS and hosted on GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | Portfolio home page (Testing & Quality, C++, Unreal, Unity) |
| `about.html` | About page (experience, education, skills) |
| `styles.css` | All styling. Colours and fonts are set at the top in `:root` |
| `script.js` | Image fallback and copyright year |
| `cv.pdf` | **Add this yourself:** your latest CV, exported as a PDF |
| `assets/` | **Add these yourself:** GIFs and photos (see below) |

## Images to add to `assets/`

Until these files are added, the site loads each image from its old Wix copy (or from GitHub for the unit test screenshot).
Download each one by opening the link and saving it with the name shown.

| Save as | Download from |
|---|---|
| `culling.gif` | https://static.wixstatic.com/media/40ba1e_180a499cfff04331a7eabafb1f738511~mv2.gif |
| `particles.gif` | https://static.wixstatic.com/media/40ba1e_3e02587883214f639353343e044ba246~mv2.gif |
| `ruinsanity.gif` | https://static.wixstatic.com/media/40ba1e_9689d51760da4d0ab602375b40afc9a5~mv2.gif |
| `boss-fight.gif` | https://static.wixstatic.com/media/40ba1e_5f80af694ba04b619deacfe97c0899d1~mv2.gif |
| `wayfarers-guild.gif` | https://static.wixstatic.com/media/40ba1e_1d793020b34a48ffba9d901d9f28065b~mv2.gif |
| `unnamed-afterlife.gif` | https://static.wixstatic.com/media/40ba1e_75db0c5157794902848cf223ca077a42~mv2.gif |
| `profile.jpg` | https://static.wixstatic.com/media/40ba1e_023497a4509e4e8787c505c45c496624~mv2.jpg |
| `unit-tests.png` | https://github.com/Mr-Wilhelm/OpenGL-Culling-Algorithms/blob/main/Unit%20Testing%20All%20Successes.png (click "Download raw file") |

Add these before you cancel the Wix site, otherwise the fallback images will stop working.

## Publishing on GitHub Pages

1. On GitHub, create a new **public** repository named exactly `Mr-Wilhelm.github.io`.
2. Upload every file and folder from this folder, including `.nojekyll`. Use **Add file → Upload files**, or push it with Git.
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then click **Save**.
4. After a minute or two the site is live at **https://mr-wilhelm.github.io**.

To update the site later, edit the files and commit. GitHub republishes automatically.

## Optional: a custom domain

A domain such as `willandrew.dev` looks more professional on a CV. Buy one from any registrar, then add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.
