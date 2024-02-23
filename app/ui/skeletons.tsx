export function CardBoardSkeleton() {
  return (
    <>
      <div className="h-[6.5rem] w-full lg:w-full 2xl:w-60 md:w-56 p-2 md:p-4 rounded-md bg-gray-100 animate-pulse">
        <div className="h-4 w-2/3 mb-2 bg-gray-300"></div>
        <div className="h-8 w-full mb-2 bg-gray-300"></div>
        <div className="flex gap-1 items-center">
          <div className="h-0 w-0 border-b-[12px] border-l-[7px] border-r-[7px] border-b-gray-300 border-l-transparent border-r-transparent" />
          <div className="h-4 w-2/3 bg-gray-300"></div>
        </div>
      </div>
    </>
  );
}

export function CardsBoardSkeleton() {
  return (
    <>
      <CardBoardSkeleton />
      <CardBoardSkeleton />
      <CardBoardSkeleton />
    </>
  );
}

export function CardUserSkeleton() {
  return (
    <>
      <div className="flex gap-4 items-center justify-center bg-gray-100 m-2 md:m-4 p-2.5 rounded-md animate-pulse">
        <div className="w-9 h-9 rounded-full bg-gray-300"></div>
        <div>
          <div className="w-40 h-4 bg-gray-300 mb-1"></div>
          <div className="w-40 h-6 bg-gray-200"></div>
        </div>
      </div>
    </>
  );
}
export function CardsUserSkeleton() {
  return (
    <>
      <div className="flex justify-between items-center p-2 md:p-4 rounded-md">
        <div className="w-[35%] h-4 bg-gray-300"></div>
        <select
          name=""
          id="select2"
          defaultValue="M"
          className="p-2 bg-gray-200 rounded-md text-xs w-[49%]"
          disabled
        >
          <option value="D" disabled>
            Diariamente
          </option>
          <option value="M" disabled>
            Mensalmente
          </option>
          <option value="A" disabled>
            Anualmente
          </option>
        </select>
      </div>
      <CardUserSkeleton />
      <CardUserSkeleton />
      <CardUserSkeleton />
      <CardUserSkeleton />
      <CardUserSkeleton />
    </>
  );
}

export function StackedBarChartSkeleton() {
  return (
    <>
      <div className="w-full h-96 bg-gray-100 rounded-md animate-pulse">
        <div className="h-full flex justify-between items-end px-4 pb-4">
          {/* Barra 1 */}
          <div className="w-10 bg-gray-300"></div>
          {/* Barra 2 */}
          <div className="w-10 bg-gray-300"></div>
          {/* Barra 3 */}
          <div className="w-10 bg-gray-300"></div>
          {/* Barra 4 */}
          <div className="w-10 bg-gray-300"></div>
          {/* Barra 5 */}
          <div className="w-10 bg-gray-300"></div>
          {/* Barra 6 */}
          <div className="w-10 bg-gray-300"></div>
          {/* Barra 7 */}
          <div className="w-10 bg-gray-300"></div>
        </div>
      </div>
    </>
  );
}
