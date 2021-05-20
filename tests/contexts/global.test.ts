import { createGlobalCtx } from "../../src/contexts";

test("creates context", () => {
    const ctx = createGlobalCtx();

    expect(ctx).toEqual([
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
    ]);
});
