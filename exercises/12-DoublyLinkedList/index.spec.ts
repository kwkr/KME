import LinkedList from "./index";;
import { test_list } from "./@utils/ListTest";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
