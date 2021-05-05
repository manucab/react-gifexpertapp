import { useFetchGifs } from "../../Hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en useFetcgGifs", () => {
  test("debe de retornar el estado inicial", async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One Punch Man"));

    const { data, loading } = result.current;

    await waitForNextUpdate()


    expect( data ).toEqual([])
    expect( loading ).toBe( true )

  });

  test('debe de retornar un array de imagenes y loading en false', async() => {
      
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One Punch Man"));
    await waitForNextUpdate()
    const { data, loading } = result.current;

    expect( data.length ).toBe(10)
    expect( loading ).toBe( false )

  })
  

});
