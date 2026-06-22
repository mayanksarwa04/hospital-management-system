// src/features/auth/components/LoginForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../api/authApi";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import type { LoginResponse } from "../types/auth.types";

export function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("doctor1");
  const [password, setPassword] = useState("doctor123");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    try {
      setIsLoading(true);

      const data: LoginResponse = await loginUser({
        username,
        password,
      });

      localStorage.setItem("hms_user", JSON.stringify(data));

      navigate("/dashboard");
    } catch {
      setError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        id="username"
        label="Username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="login-error">{error}</p>}

      <Button type="submit" isLoading={isLoading}>
        Sign in
      </Button>
    </form>
  );
}