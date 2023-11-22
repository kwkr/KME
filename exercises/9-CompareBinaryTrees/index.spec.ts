import compare from "./index";;
import { tree, tree2 } from "./@utils/tree";

test("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});





