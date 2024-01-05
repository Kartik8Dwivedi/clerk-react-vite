import { SignIn, SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import './App.css'

function App() {

  return (
    <>
      <SignedOut>
        <SignInButton />
        <SignOutButton />
        <p>This content is public. Only signed out users can see this.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <SignInButton />
        <p>This content is private. Only signed in users can see this.</p>
      </SignedIn>
    </>
  );
}

export default App
