import SinglyLinkedList from "./index";;
import { test_list } from "./@utils/ListTest";

test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});
