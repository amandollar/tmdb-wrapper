

```markdown
# TMDB Wrapper API Endpoints

**Base URL:**
```

[https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy](https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy)

```

---

### 📚 Endpoints

#### 🔍 Search Movies
```

GET /api/tmdb-proxy?path=/search/movie\&query=batman

```

#### 🎬 Movie Details by ID
```

GET /api/tmdb-proxy?path=/movie/19995

```

#### 📄 List Genres
```

GET /api/tmdb-proxy?path=/genre/movie/list

```

#### 📈 Top Rated Movies
```

GET /api/tmdb-proxy?path=/movie/top\_rated

```

#### 🎥 Popular Movies
```

GET /api/tmdb-proxy?path=/movie/popular

```

#### ⏳ Upcoming Movies
```

GET /api/tmdb-proxy?path=/movie/upcoming

```

#### 🔥 Trending Movies (Daily)
```

GET /api/tmdb-proxy?path=/trending/movie/day

```

#### 🔥 Trending Movies (Weekly)
```

GET /api/tmdb-proxy?path=/trending/movie/week

```

#### 🧠 Discover Movies by Genre
```

GET /api/tmdb-proxy?path=/discover/movie\&with\_genres=28

```

---

```
