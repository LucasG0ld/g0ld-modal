# g0ld-modal - Modal Plugin for ReactJS

`g0ld-modal` is a simple and elegant modal plugin designed to be used in ReactJS applications. It allows you to easily display modals in your application, providing a convenient way to show information, messages, or additional actions without leaving the main page.

## Installation

You can install `g0ld-modal` via npm by running the following command:

```bash
npm install g0ld-modal
```

## Usage

Follow these steps to use g0ld-modal in your ReactJS project:

1. Import the module in your JavaScript/JSX file:

```jsx
import React, { useState } from 'react';
import G0ldModal from 'g0ld-modal';
import "./modal.css";

// Your React code here...
```

2. Create a component for the custom modal:

```jsx
function CustomModal({ isOpen, onClose, children }) {
  return (
    <G0ldModal isOpen={isOpen} onClose={onClose}>
      {children}
    </G0ldModal>
  );
}

export default CustomModal;
```

3. Create a component for the custom modal content:
```jsx
import React from 'react';
import CustomModal from './chemin/vers/votre/CustomModal';
import Link from '../../atoms/link/link';

function CustomModalContent({ handleCreateEmployee }) {
  return (
    <div>
        <div className="hnt-modal-title-container">
            <h2 className="hnt-modal-title">New Employee</h2>
        </div>
        <p>Congratulations, new employee created!</p>
    </div>
  );
}

export default CustomModalContent;
```

## Configuration Options

`g0ld-modal` supports the following configuration options when opening the modal:

* `isOpen` (bool): A boolean indicating whether the modal should be shown or hidden.
* `onClose` (function): A callback function to be executed when the modal is closed.
* `children` (React component): Content to be displayed inside the modal, such as titles, text, forms, etc.