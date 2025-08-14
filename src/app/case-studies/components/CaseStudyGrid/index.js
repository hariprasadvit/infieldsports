"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function CaseStudyGrid({ filters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreMode, setLoadMoreMode] = useState(true);
  const studiesPerPage = 9;

  const caseStudies = [
    {
      id: 1,
      title: "Kshetra Scoring at M.A. Chidambaram Stadium",
      excerpt: "Revolutionary cricket scoring system implementation for IPL matches with real-time analytics and automated statistics generation.",
      image: null,
      tags: ["Scoring Software", "Cricket", "AI Analytics"],
      metrics: ["3 Sports", "+40% Sponsor Visibility", "Real-time Stats"],
      solutionType: "Software Solutions",
      sport: "Cricket",
      region: "India",
      year: "2024"
    },
    {
      id: 2,
      title: "LED Perimeter Display - Wankhede Stadium",
      excerpt: "Complete LED infrastructure overhaul for Mumbai's premier cricket venue, featuring 360-degree perimeter displays.",
      image: null,
      tags: ["LED Infrastructure", "Stadium Tech", "Cricket"],
      metrics: ["360° Coverage", "4K Resolution", "Weather Resistant"],
      solutionType: "Stadium Solutions",
      sport: "Cricket",
      region: "India",
      year: "2024"
    },
    {
      id: 3,
      title: "AI-Powered Football Analytics - Emirates Stadium",
      excerpt: "Advanced player tracking and performance analytics system for Premier League matches with predictive insights.",
      image: null,
      tags: ["AI Analytics", "Player Tracking", "Football"],
      metrics: ["22 Player Tracking", "95% Accuracy", "Live Insights"],
      solutionType: "AI Solutions",
      sport: "Football",
      region: "UK",
      year: "2023"
    },
    {
      id: 4,
      title: "Golf Tournament Broadcast Solution",
      excerpt: "Complete broadcast automation for major golf championships with drone integration and shot tracking.",
      image: null,
      tags: ["Broadcast Software", "Drone Tech", "Golf"],
      metrics: ["18 Hole Coverage", "Drone Integration", "Auto Switching"],
      solutionType: "Hybrid",
      sport: "Golf",
      region: "USA",
      year: "2023"
    },
    {
      id: 5,
      title: "Hockey Analytics Platform - Sydney Olympic Park",
      excerpt: "Real-time hockey analytics with player heat maps and tactical analysis for international tournaments.",
      image: null,
      tags: ["Analytics Platform", "Hockey", "Performance"],
      metrics: ["Heat Mapping", "Tactical Analysis", "Team Insights"],
      solutionType: "AI Solutions",
      sport: "Hockey",
      region: "Australia",
      year: "2023"
    },
    {
      id: 6,
      title: "Athletics Track & Field System",
      excerpt: "Comprehensive timing and measurement system for world athletics championships with photo finish integration.",
      image: null,
      tags: ["Timing System", "Athletics", "Photo Finish"],
      metrics: ["Photo Finish", "Wind Speed", "Split Times"],
      solutionType: "Software Solutions",
      sport: "Athletics",
      region: "UAE",
      year: "2022"
    },
    {
      id: 7,
      title: "Smart Stadium Infrastructure - Cape Town",
      excerpt: "Complete digital transformation of rugby stadium with IoT sensors and crowd management systems.",
      image: null,
      tags: ["IoT Integration", "Smart Stadium", "Crowd Management"],
      metrics: ["IoT Sensors", "Crowd Flow", "Energy Efficient"],
      solutionType: "Stadium Solutions",
      sport: "Football",
      region: "South Africa",
      year: "2022"
    },
    {
      id: 8,
      title: "Cricket Broadcast Automation - MCG",
      excerpt: "AI-driven broadcast automation for cricket matches with automatic camera switching and graphics integration.",
      image: null,
      tags: ["Broadcast AI", "Cricket", "Auto Graphics"],
      metrics: ["12 Camera Auto", "Graphics AI", "Commentary Assist"],
      solutionType: "Hybrid",
      sport: "Cricket",
      region: "Australia",
      year: "2022"
    },
    {
      id: 9,
      title: "Football Stadium LED Renovation",
      excerpt: "Complete LED display renovation for premier football stadium with curved displays and weather protection.",
      image: null,
      tags: ["LED Displays", "Football", "Weather Resistant"],
      metrics: ["Curved Displays", "IP65 Rated", "High Brightness"],
      solutionType: "Stadium Solutions",
      sport: "Football",
      region: "UK",
      year: "2021"
    },
    {
      id: 10,
      title: "Golf Performance Analytics Suite",
      excerpt: "Advanced golf performance tracking with swing analysis and course optimization for professional tournaments.",
      image: null,
      tags: ["Swing Analysis", "Golf", "Performance"],
      metrics: ["Swing Tracking", "Course Analytics", "Player Stats"],
      solutionType: "AI Solutions",
      sport: "Golf",
      region: "USA",
      year: "2021"
    },
    {
      id: 11,
      title: "Multi-Sport Venue Management System",
      excerpt: "Integrated venue management for multi-sport complex with scheduling and resource optimization.",
      image: null,
      tags: ["Venue Management", "Multi-Sport", "Optimization"],
      metrics: ["5 Sports", "Resource Optimization", "Smart Scheduling"],
      solutionType: "Software Solutions",
      sport: "Athletics",
      region: "India",
      year: "2021"
    },
    {
      id: 12,
      title: "Hockey Broadcast Enhancement",
      excerpt: "Enhanced hockey broadcast experience with puck tracking and player identification technology.",
      image: null,
      tags: ["Puck Tracking", "Hockey", "Player ID"],
      metrics: ["Puck Tracking", "Player Recognition", "Enhanced Graphics"],
      solutionType: "Hybrid",
      sport: "Hockey",
      region: "USA",
      year: "2020"
    }
  ];

  const filteredStudies = caseStudies.filter(study => {
    if (!filters) return true;
    
    const { searchTerm, solutionType, sport, region, year } = filters;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      if (!study.title.toLowerCase().includes(searchLower) && 
          !study.excerpt.toLowerCase().includes(searchLower) &&
          !study.tags.some(tag => tag.toLowerCase().includes(searchLower))) {
        return false;
      }
    }
    
    if (solutionType && study.solutionType !== solutionType) return false;
    if (sport && study.sport !== sport) return false;
    if (region && study.region !== region) return false;
    if (year && study.year !== year) return false;
    
    return true;
  });

  const totalPages = Math.ceil(filteredStudies.length / studiesPerPage);
  const displayedStudies = loadMoreMode 
    ? filteredStudies.slice(0, currentPage * studiesPerPage)
    : filteredStudies.slice((currentPage - 1) * studiesPerPage, currentPage * studiesPerPage);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <section className={styles.caseStudyGrid}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.results}>
            <h2>Case Studies</h2>
            <span className={styles.count}>
              {filteredStudies.length} {filteredStudies.length === 1 ? 'result' : 'results'} found
            </span>
          </div>
          
          <div className={styles.viewToggle}>
            <button 
              className={`${styles.toggleBtn} ${loadMoreMode ? styles.active : ''}`}
              onClick={() => setLoadMoreMode(true)}
            >
              Load More
            </button>
            <button 
              className={`${styles.toggleBtn} ${!loadMoreMode ? styles.active : ''}`}
              onClick={() => setLoadMoreMode(false)}
            >
              Pagination
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {displayedStudies.map((study, index) => (
            <div key={study.id} className={styles.caseCard}>
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                  <span>Case Study Image</span>
                </div>
                <div className={styles.overlay}>
                  <div className={styles.tags}>
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag}>
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.title}>{study.title}</h3>
                <p className={styles.excerpt}>{study.excerpt}</p>
                
                <div className={styles.metrics}>
                  {study.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className={styles.metric}>
                      {metric}
                    </span>
                  ))}
                </div>
                
                <button className={styles.ctaButton}>
                  View Case Study
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className={styles.noResults}>
            <h3>No case studies found</h3>
            <p>Try adjusting your search terms or filters</p>
          </div>
        )}

        {filteredStudies.length > 0 && (
          <div className={styles.pagination}>
            {loadMoreMode ? (
              displayedStudies.length < filteredStudies.length && (
                <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
                  Load More Case Studies
                  <div className={styles.loadMoreProgress}>
                    <div 
                      className={styles.progressBar}
                      style={{ width: `${(displayedStudies.length / filteredStudies.length) * 100}%` }}
                    ></div>
                  </div>
                </button>
              )
            ) : (
              <div className={styles.paginationControls}>
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={styles.pageBtn}
                >
                  Previous
                </button>
                
                <div className={styles.pageNumbers}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`${styles.pageNumber} ${currentPage === page ? styles.active : ''}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={styles.pageBtn}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
