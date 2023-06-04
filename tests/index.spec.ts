import { describe, it, expect, afterEach, vi } from "vitest";
import StormClient from "../src/index";

describe("Check connection strihng", () => {
  it("should use the connection string provided in the environment", () => {
    // Make sure the environment variable is set to some value
    const url = "postgres://dummy_url:5432/storm";
    vi.stubEnv("DATABASE_URL", url);

    // Create a new instance of the client and check the connection string
    const client = new StormClient();
    expect(client["connectionString"]).toBe(url);
  });

  it("should throw an error if no connection string is provided", () => {
    // Delete the environment variable
    vi.stubEnv("DATABASE_URL", "");

    // Ensure that an error is thrown when creating a new instance
    expect(() => new StormClient()).toThrow("No connection string provided");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });
});
