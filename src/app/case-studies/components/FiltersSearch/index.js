"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function FiltersSearch({ onFiltersChange }) {
  const [isSticky, setIsSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    solutionType: "",
    sport: "",
    region: "",
    year: ""
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filterOptions = {
    solutionType: ["Software Solutions", "Stadium Solutions", "AI Solutions", "Hybrid"],
    sport: ["Cricket", "Football", "Hockey", "Golf", "Athletics"],
    region: ["India", "USA", "UK", "Australia", "UAE", "South Africa"],
    year: ["2024", "2023", "2022", "2021", "2020"]
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsSticky(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...activeFilters,
      [filterType]: activeFilters[filterType] === value ? "" : value
    };
    setActiveFilters(newFilters);
    onFiltersChange?.({ ...newFilters, searchTerm });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFiltersChange?.({ ...activeFilters, searchTerm: e.target.value });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      solutionType: "",
      sport: "",
      region: "",
      year: ""
    });
    setSearchTerm("");
    onFiltersChange?.({
      solutionType: "",
      sport: "",
      region: "",
      year: "",
      searchTerm: ""
    });
  };

  const activeFilterCount = Object.values(activeFilters).filter(Boolean).length + (searchTerm ? 1 : 0);

  return (
    <div className={`${styles.filtersSearch} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.container}>
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search by stadium name, sport, solution type..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  onFiltersChange?.({ ...activeFilters, searchTerm: "" });
                }}
                className={styles.clearSearch}
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className={styles.filtersSection}>
          <div className={styles.filterToggle} onClick={() => setShowMobileFilters(!showMobileFilters)}>
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className={styles.filterBadge}>{activeFilterCount}</span>
            )}
            <svg className={`${styles.chevron} ${showMobileFilters ? styles.open : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </div>

          <div className={`${styles.filters} ${showMobileFilters ? styles.showMobile : ""}`}>
            {Object.entries(filterOptions).map(([filterType, options]) => (
              <div key={filterType} className={styles.filterGroup}>
                <label className={styles.filterLabel}>
                  {filterType === "solutionType" ? "Solution Type" : 
                   filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </label>
                <select
                  value={activeFilters[filterType]}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                  className={styles.filterSelect}
                >
                  <option value="">All {filterType === "solutionType" ? "Solutions" : 
                    filterType.charAt(0).toUpperCase() + filterType.slice(1)}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            {activeFilterCount > 0 && (
              <button onClick={clearAllFilters} className={styles.clearAllBtn}>
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
