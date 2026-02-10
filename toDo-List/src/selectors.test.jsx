import { get } from "mobx";
import { getCompletedTodos, getIncompleteTodos } from "./selectors";

describe('selectors',()=>{
      const fakeState = {
    todos: {
      value: [
        { id: 1, text: "Todo 1", isCompleted: true },
        { id: 2, text: "Todo 2", isCompleted: false },
        { id: 3, text: "Todo 3", isCompleted: true },
      ],
    },
  };

  test("getCompletedTodos returns only completed items",()=>{
    const result =getCompletedTodos(fakeState);
    expect(result).toHaveLength(2);
    expect(result.map(t=>t.id)).toEqual([1,3]);
  })

    test("getIncompleteTodos returns only incomplete items",()=>{
    const result =getIncompleteTodos(fakeState);
    expect(result).toHaveLength(1);
    expect(result.map(t=>t.id)).toEqual([2]);
  })
})