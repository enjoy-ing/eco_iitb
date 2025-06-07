# Economics Student Portal

A comprehensive web application built with React and Vite for IIT Bombay Economics students. This portal provides academic resources, course reviews, blog articles, and team information to support the economics community.

## 🚀 Features

### 📚 Course Reviews
- **Detailed Course Pages**: Click on any course to view comprehensive information including:
  - Course description, prerequisites, and syllabus
  - Professor information and contact details  
  - Student ratings and reviews with difficulty levels
  - Grading breakdown and recommended textbooks
- **Smart Filtering**: Search and filter courses by semester, rating, or difficulty
- **Interactive Cards**: Clean, clickable course cards with quick overview information

### 📖 Academic Resources
- **Categorized Materials**: Resources organized by semester, research, career, and information
- **Search & Filter**: Find specific resources quickly with advanced filtering
- **Download Tracking**: Popular resources highlighted with download counts
- **Request System**: Students can request new resources to be added

### 📝 Blog Articles
- **Featured Posts**: Highlighted articles on internships, exchanges, and research
- **Category System**: Articles organized by internship experiences, semester exchange, research, and datasets
- **Search Functionality**: Find articles by title, content, or author
- **Tag System**: Easy navigation through article topics

### 👥 Council Team
- **Team Profiles**: Detailed information about council members including bios and contact info
- **Position Filtering**: Filter team members by their roles
- **Contact Integration**: Direct email and LinkedIn links
- **Join Team**: Information for students interested in joining the council

### 🎨 Design Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with consistent color scheme
- **Smooth Animations**: Hover effects and transitions throughout the interface
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Routing**: React Router v6 for seamless navigation
- **Styling**: Tailwind CSS for responsive and consistent design
- **Icons**: Lucide React for scalable vector icons
- **Build Tool**: Vite for fast development and optimized builds

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd economics-student-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.jsx       # Navigation bar with mobile menu
│   ├── Footer.jsx       # Site footer with contact info
│   ├── StarRating.jsx   # Star rating display component
│   └── CourseCard.jsx   # Clickable course card component
├── pages/               # Main application pages
│   ├── HomePage.jsx     # Landing page with features overview
│   ├── CourseReviewsPage.jsx  # Course listing with filters
│   ├── CourseDetailPage.jsx   # Individual course details
│   ├── ResourcesPage.jsx      # Academic resources gallery
│   ├── BlogPage.jsx           # Blog articles listing
│   └── CouncilTeamPage.jsx    # Team member profiles
├── data/                # Static data files
│   ├── coursesData.js   # Course information and reviews
│   ├── teamData.js      # Council member information
│   ├── resourcesData.js # Academic resources data
│   └── blogData.js      # Blog posts and categories
├── App.jsx              # Main app component with routing
├── main.jsx             # React app entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎯 Key Features Explained

### Course Review System
The course review system is the heart of the application:

- **Course Cards**: Each course displays essential information (rating, difficulty, professor) in an easy-to-scan format
- **Detailed Views**: Clicking any course opens a comprehensive page with tabs for:
  - Overview: Prerequisites, grading, textbooks
  - Syllabus: Detailed topic breakdown
  - Reviews: Student feedback with ratings
  - Professor: Contact information and office hours
- **Smart Navigation**: Breadcrumbs and back buttons for easy navigation

### Data Management
All content is managed through static JavaScript files in the `data/` directory:

- **No CSV Required**: Removed all CSV functionality as requested
- **Easy Updates**: Simply edit the JavaScript data files to update content
- **Type Safety**: Structured data objects ensure consistency
- **Search Optimization**: Data structure optimized for filtering and searching

### Responsive Design
The application works seamlessly across all devices:

- **Mobile-First**: Designed primarily for mobile users
- **Tablet Optimization**: Grid layouts adapt for tablet screens
- **Desktop Enhancement**: Full desktop features with hover effects
- **Touch-Friendly**: Large touch targets for mobile interaction

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🔧 Customization

### Adding New Courses
Edit `src/data/coursesData.js`:
```javascript
{
  id: 'new-course-id',
  code: 'EC 301',
  name: 'Advanced Economics',
  semester: 'SEM 5',
  // ... other properties
}
```

### Adding Team Members
Edit `src/data/teamData.js`:
```javascript
{
  id: 7,
  name: 'New Member',
  position: 'Secretary',
  // ... other properties
}
```

### Updating Colors
Modify `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'econ-blue': {
        // Custom blue shades
      }
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit changes: `git commit -m 'Add feature'`
5. Push to branch: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License. See LICENSE file for details.

## 📞 Support

For support or questions:
- Email: contact@econcouncil.iitb.ac.in
- Visit: HSS Building, IIT Bombay
- Office Hours: Mon-Fri, 2:00-5:00 PM

---

Built with ❤️ by the Economics Council | Supporting academic excellence since 2017