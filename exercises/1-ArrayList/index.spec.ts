import ArrayList from "./index";
import { test_list } from "@utils/ListTest";

test("array-list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
});
