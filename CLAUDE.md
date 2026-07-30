# Watch Party

## Project Overview

Watch Party app cho phep nhieu nguoi cung xem YouTube dong bo, chat realtime, va quan ly room (public/private). Du an nay dong thoi la lo trinh hoc React tu beginner den mid-level.

**Repo nay chi la Frontend (FE).** Backend (API, WebSocket server, v.v.) nam o repo rieng, khong setup trong repo nay.

**Tech stack:** React, Vite, Socket.IO client, Zustand, React Query
**Package manager:** bun

## Current Progress

**Active Phase: Phase 1 — Single Player (Core Hooks)**

* [ ] Setup React project (Vite)
* [ ] Create video input (YouTube URL)
* [ ] Extract video ID
* [ ] Embed YouTube player
* [ ] Implement play / pause
* [ ] Implement seek (timestamp)

## Architecture Rules

### Folder Structure

```
src/
 ├── components/    # Shared/reusable UI components
 ├── features/      # Feature modules, moi feature 1 folder
 │    ├── chat/     # Chat UI + logic
 │    ├── room/     # Room management
 │    ├── auth/     # Authentication
 ├── hooks/         # Custom hooks dung chung
 ├── services/      # API calls (axios/fetch wrappers)
 ├── store/         # Zustand stores
 ├── sockets/       # Socket.IO logic (connect, events, listeners)
 ├── utils/         # Helper functions
```

### State Management

| Loai state | Dung gi | Vi du |
|---|---|---|
| Server state (API data) | React Query | User profile, room list, messages history |
| Client state (global) | Zustand | Current user, current room, UI flags |
| Local/ephemeral state | useState | Form inputs, toggle, modal open/close |
| Socket reference | Zustand (ref only) | Socket instance, KHONG store messages trong Zustand |

### Socket Rules

- Toan bo socket logic nam trong `src/sockets/`
- Components KHONG duoc truc tiep emit/listen socket events
- Dung custom hooks (vd: `useSocket`, `useSyncPlayer`) de bridge giua socket va UI
- Xu ly disconnect/reconnect tai socket layer, khong tai component

## Code Conventions

- **Component naming:** PascalCase (`ChatMessage.jsx`, `RoomList.jsx`)
- **Custom hooks:** `use*` prefix (`useChat`, `useRoom`, `useSocket`)
- **Feature files:** group theo feature, khong theo file type
- **No business logic trong UI components** — logic vao hooks hoac services
- Dung bun lam package manager (`bun install`, `bun run <script>`)

## Common Pitfalls

* [ ] Overusing global state
* [ ] Mixing server state & client state
* [ ] Infinite loops in useEffect
* [ ] Uncontrolled socket events
* [ ] Unnecessary re-renders

## How to Update This File

- Khi hoan thanh 1 phase: check cac task da xong, chuyen active phase sang phase tiep theo
- Chi paste task checklist cua phase dang active
- Tham khao `_plan.md` de lay checklist cua phase moi
