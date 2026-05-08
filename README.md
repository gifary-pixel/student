# Student Database Management System

A modern, interactive web application for managing student information with add, edit, delete, search, and export features.

## Features

- ✅ Add, edit, and delete student records
- ✅ Search by name or email
- ✅ View student statistics (total, active, grades)
- ✅ Export data to CSV
- ✅ Responsive design (works on mobile & desktop)
- ✅ Clean, professional UI

## Quick Start

### Local Development

1. **Clone or download this repository**
   ```bash
   cd student-database
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm start
   ```
   Opens at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## Deploy to Vercel (Free)

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub**
   - Create a new repository on [github.com](https://github.com/new)
   - Upload your code to GitHub

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"
   - **Done!** Your site is live at a URL like `https://student-database-xxx.vercel.app`

### Option 2: Deploy Directly (Without GitHub)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### Option 3: Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Click "New site from Git" or "Deploy manually"
4. Upload your `build` folder (after running `npm run build`)
5. **Done!** Your site is live

## Tech Stack

- **React** - UI framework
- **Lucide React** - Icons
- **CSS** - Styling

## File Structure

```
student-database/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Styling
│   └── index.js            # React entry point
├── package.json            # Dependencies & scripts
└── README.md               # This file
```

## Features Explained

### Add/Edit Student
Click "Add Student" to open the form. Fill in name, email, grade, and status. Click "Update Student" if editing.

### Search
Type a name or email in the search box to filter students instantly.

### Export
Click "Export" to download all student records as a CSV file.

### Statistics
The dashboard shows total students, active count, and grade distribution.

## Customization

You can modify:
- **Colors** - Edit variables in `src/App.css` (`:root` section)
- **Student fields** - Edit `src/App.js` to add/remove columns
- **UI** - Customize `src/App.js` and `src/App.css`

## Troubleshooting

**Port 3000 already in use?**
```bash
npm start -- --port 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm cache clean --force
npm install
npm run build
```

## Live Demo

Once deployed, share your Vercel URL with anyone to let them use the database!

---

**Need help?** Check out the [Vercel docs](https://vercel.com/docs) or [React docs](https://react.dev)
