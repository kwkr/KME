import dfs from "./index";;
import { list2 } from "./@utils/graph";

test("dfs - graph", function () {
    expect(dfs(list2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(dfs(list2, 6, 0)).toEqual(null);
});

