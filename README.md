# Source Control System

A Git-style distributed version control system implementation.

## Current Implementation

### Completed Features

1. **Repository Initialization**

   - Initialize a new repository with `.git` directory structure
   - Creates necessary subdirectories (objects, refs)
   - Sets up initial HEAD reference

2. **Object Management**

   - Hash object creation and storage
   - Support for blob objects
   - Object content retrieval

3. **File Operations**

   - Cat-file functionality to display:
     - Object content (-p)
     - Object type (-t)
     - Object size (-s)

4. **Tree Operations**

   - List tree contents
   - Support for name-only listing

5. **Basic File Ignoring**
   - Simple `.gitignore` support implemented

### Missing Features

1. **Staging Area**

   - No implementation of `git add` functionality
   - Missing index/staging area management

2. **Commits**

   - No commit creation functionality
   - Missing commit object implementation
   - No commit history tracking

3. **Branching**

   - No branch creation
   - Missing branch management
   - No branch switching functionality

4. **Merging**

   - No merge functionality
   - Missing conflict detection
   - No diff implementation

5. **Repository Cloning**
   - No local repository cloning functionality

## Setup

1. Install dependencies:

```bash
bun install
```

2. Run the application:

```bash
bun run start <command>
```

## Available Commands

- `init`: Initialize a new repository
- `cat-file`: Display object information
  - `-p`: Show object content
  - `-t`: Show object type
  - `-s`: Show object size
- `hash-object`: Create and store object hash
  - `-w`: Write object to storage
- `ls-tree`: List tree contents
  - `--name-only`: Show only file names

## Tech Stack

- TypeScript
- Bun runtime
- Node.js built-in modules (fs, crypto, zlib)

## Next Steps

Priority implementation order should be:

1. Staging area and `git add` functionality
2. Commit implementation
3. Branch management
4. Basic merge functionality with conflict detection
5. Local repository cloning
6. Diff implementation
