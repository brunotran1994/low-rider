# 🎬 Watch Party Project – React Learning Roadmap

## 🧠 Goal

Build a real-world **Watch Party App** to master React from beginner → mid-level.

Features:

* YouTube sync player
* Realtime chat
* Room system (public/private)
* Auth & profile
* Friend & invite system

---

# 🗺️ Master Plan

```txt
Week 1: Phase 1–2
Week 2: Phase 3–4
Week 3: Phase 5 (Realtime)
Week 4: Phase 6–7
Week 5: Phase 8–9
Week 6: Polish + Deploy
```

---

# ⚔️ PHASE 1 — Single Player (Core Hooks)

## 🎯 Goal

Basic YouTube player with React hooks

## ✅ Tasks

* [ ] Setup React project (Vite)
* [ ] Create video input (YouTube URL)
* [ ] Extract video ID
* [ ] Embed YouTube player
* [ ] Implement play / pause
* [ ] Implement seek (timestamp)

## 🧠 Learn

* useState
* useEffect
* Controlled components

## ⚠️ Notes

* Avoid unnecessary re-renders
* Understand effect lifecycle

---

# ⚔️ PHASE 2 — Room (Local State)

## 🎯 Goal

Simulate room system (no backend yet)

## ✅ Tasks

* [ ] Create room UI
* [ ] Join room (local state)
* [ ] Maintain current room state
* [ ] Each room has its own video

## 🧠 Learn

* Lifting state up
* Component structure
* Props vs state

---

# ⚔️ PHASE 3 — Chat UI (Custom Hooks)

## 🎯 Goal

Build chat UI (no realtime yet)

## ✅ Tasks

* [ ] Chat message list
* [ ] Chat input
* [ ] Send message (local)
* [ ] Auto scroll to bottom

## 🧠 Learn

* Custom hooks (`useChat`)
* Separation of logic and UI

---

# ⚔️ PHASE 4 — Auth + API

## 🎯 Goal

Integrate backend (basic auth)

## ✅ Tasks

* [ ] Setup backend (Node.js)
* [ ] Signup API
* [ ] Login API
* [ ] Store JWT
* [ ] Fetch user profile

## 🧠 Learn

* React Query (server state)
* API handling (loading/error)
* Form handling

---

# ⚔️ PHASE 5 — Realtime (🔥 Core Phase)

## 🎯 Goal

Realtime chat + video sync

## ✅ Tasks

* [ ] Setup WebSocket (Socket.IO)
* [ ] Connect client to server
* [ ] Implement realtime chat
* [ ] Broadcast messages
* [ ] Sync play/pause events
* [ ] Sync seek events

## 🧠 Learn

* Event-driven architecture
* WebSocket lifecycle

## ⚠️ Notes

* Avoid duplicate events
* Handle disconnect/reconnect

---

# ⚔️ PHASE 6 — Global State (Zustand)

## 🎯 Goal

Centralized client state

## ✅ Tasks

* [ ] Setup Zustand store
* [ ] Store user info
* [ ] Store current room
* [ ] Store socket instance (optional reference only)

## 🧠 Learn

* Store design
* Avoid over-global state

---

# ⚔️ PHASE 7 — Room System (Backend)

## 🎯 Goal

Real room management

## ✅ Tasks

* [ ] Create room API
* [ ] Fetch room list
* [ ] Join room by ID/code
* [ ] Private/public rooms

## 🧠 Learn

* React Query caching
* Optimistic updates

---

# ⚔️ PHASE 8 — Friend & Invite

## 🎯 Goal

Social features

## ✅ Tasks

* [ ] Add friend API
* [ ] Friend list UI
* [ ] Invite friend to room
* [ ] Notification system (basic)

## 🧠 Learn

* Complex state flow
* Event coordination

---

# ⚔️ PHASE 9 — Optimization

## 🎯 Goal

Mid-level performance mindset

## ✅ Tasks

* [ ] Optimize re-renders
* [ ] Memoize components
* [ ] Split large components
* [ ] Lazy loading

## 🧠 Learn

* useMemo
* useCallback
* React performance patterns

---

# ⚔️ PHASE 10 — Production

## 🎯 Goal

Ship like a real product

## ✅ Tasks

* [ ] Environment config
* [ ] Error handling
* [ ] Deployment (FE + BE)
* [ ] Basic logging

---

# 🧩 Suggested Folder Structure

```bash
src/
 ├── components/
 ├── features/
 │    ├── chat/
 │    ├── room/
 │    ├── auth/
 ├── hooks/
 ├── services/
 ├── store/
 ├── sockets/
 ├── utils/
```

---

# 💣 Common Pitfalls

* [ ] Overusing global state
* [ ] Mixing server state & client state
* [ ] Infinite loops in useEffect
* [ ] Uncontrolled socket events
* [ ] Unnecessary re-renders

---

# 🚀 Bonus Features (Optional)

* [ ] Emoji reactions
* [ ] Typing indicator
* [ ] Host role (admin controls)
* [ ] Sync delay compensation

---

# 📌 Definition of Done (Mid-level)

* [ ] Clean architecture
* [ ] Reusable hooks
* [ ] Stable realtime system
* [ ] Optimized rendering
* [ ] Deployable app

---

# 🧭 Next Step

👉 Start with **Phase 1**
👉 Commit after each milestone
👉 Track progress using this checklist

