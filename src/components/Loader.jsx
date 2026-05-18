export const Loader = () => {
    return(
        <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm tracking-wide">Loading</p>
        </div>
      </div>
    )
}