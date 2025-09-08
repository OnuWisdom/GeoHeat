# GeoHeat: Live Store Density Analytics 🔥

## Overview

GeoHeat is a dynamic web application built with React, offering real-time insights into store density and location-based analytics on an interactive map. Leveraging OpenStreetMap data, it empowers users to visualize business clusters, search by category, and utilize geolocation for enhanced market understanding.

## Features

- **Interactive Map Visualization**: Utilizes Leaflet and OpenStreetMap data to display an intuitive, interactive map.
- **Dynamic Store Density Heatmaps**: Visually represents commercial clusters and high-density areas with a clear gradient legend.
- **Location-Based Search**: Allows users to find stores and points of interest by category (e.g., banks, restaurants, hospitals) or by name.
- **Geolocation Integration**: Pinpoints the user's current location to display relevant data within their vicinity.
- **Real-time Analytics Sidebar**: Provides live statistics such as total stores, average ratings, and coverage for the displayed area.
- **User-Friendly Interface**: Crafted with React, Tailwind CSS, and DaisyUI for a modern, responsive, and appealing user experience.
- **Client-Side API Consumption**: Efficiently fetches data from an external `osm_density` API to populate map information.

## Getting Started

### Installation

To get GeoHeat up and running on your local machine, follow these simple steps:

⭐ Clone the repository:

```bash
git clone https://github.com/OnuWisdom/GeoHeat.git
cd GeoHeat
```

✨ Install dependencies:

```bash
npm install
# or yarn install
```

🚀 Start the development server:

```bash
npm run dev
# The application will typically be accessible at http://localhost:5173 (or another port).
```

Once the development server starts, your browser should automatically open to the GeoHeat landing page.

### Environment Variables

This project does not require any specific environment variables for local development as it consumes an external API directly from the frontend.

## Usage

GeoHeat offers a straightforward interface for exploring store density.

1.  **Accessing the Map**:

    - From the initial landing page, click on the "Access GeoHeat" button in the hero section or the header to navigate to the interactive map.

2.  **Searching for Locations**:

    - On the map page, use the search bar located in the header. You can search by specific store names or general categories (e.g., `bank`, `hospital`, `restaurant`).
    - Type your query and click the "Search" button or press Enter to see the results displayed on the map.

3.  **Using Your Current Location**:

    - Click the "Use my location" button in the header. If permitted, the map will center on your current geographic coordinates and display relevant density data around you.

4.  **Filtering by Category on the Map**:

    - A dropdown menu in the top-left corner of the map allows you to quickly filter the displayed points of interest by different categories (e.g., "Banks", "Restaurants", "Hospitals").

5.  **Interacting with the Map**:

    - You can drag the map to pan and use your mouse wheel or pinch gestures to zoom in and out. The map dynamically fetches density data for the visible area as you move.

6.  **Understanding Density and Statistics**:
    - **Legend**: Refer to the "Store Density" legend in the bottom-right corner to understand the color coding for low to high density areas.
    - **Sidebar**: The "Live Statistics" sidebar in the bottom-left provides aggregate data such as the number of stores, average rating, and coverage for the currently visible map area.

## Technologies Used

| Technology       | Purpose                                             | Link                                                |
| :--------------- | :-------------------------------------------------- | :-------------------------------------------------- |
| React.js         | Declarative frontend library                        | [react.dev](https://react.dev/)                     |
| Vite             | Next-generation frontend tooling                    | [vitejs.dev](https://vitejs.dev/)                   |
| Tailwind CSS     | Utility-first CSS framework                         | [tailwindcss.com](https://tailwindcss.com/)         |
| DaisyUI          | Tailwind CSS component library                      | [daisyui.com](https://daisyui.com/)                 |
| React Router DOM | Declarative routing for React apps                  | [reactrouter.com](https://reactrouter.com/)         |
| Leaflet          | Open-source JavaScript library for interactive maps | [leafletjs.com](https://leafletjs.com/)             |
| OpenStreetMap    | Free and open geographic data                       | [openstreetmap.org](https://www.openstreetmap.org/) |
| ESLint           | Pluggable JavaScript linter                         | [eslint.org](https://eslint.org/)                   |
| Node.js          | JavaScript runtime (development environment)        | [nodejs.org](https://nodejs.org/en)                 |

## Contributing

🤝 We welcome contributions to GeoHeat! To contribute:

1.  **Fork** the repository on GitHub.
2.  **Clone** your forked repository to your local machine:
    ```bash
    git clone https://github.com/YourUsername/GeoHeat.git
    ```
3.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
4.  **Make your changes**, ensuring they align with the project's coding standards and design principles.
5.  **Commit your changes** with a clear, concise, and descriptive message:
    ```bash
    git commit -m "feat: Implement new search filter by category"
    ```
6.  **Push** your changes to your forked repository:
    ```bash
    git push origin feature/your-feature-name
    ```
7.  **Open a Pull Request** to the `main` branch of the original GeoHeat repository, detailing your changes and their purpose.

## Author

**Wisdom Onu**

- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile)
- Twitter: [@YourTwitterHandle](https://twitter.com/your-twitter-handle)
- Portfolio: [Your Portfolio Website](https://www.your-portfolio.com)

---

[![Built With React](https://img.shields.io/badge/Built%20With-React-61DAFB?logo=react)](https://react.dev/)
[![Built With Vite](https://img.shields.io/badge/Built%20With-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styled With Tailwind CSS](https://img.shields.io/badge/Styled%20With-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/Linter-ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
