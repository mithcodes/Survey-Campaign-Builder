import { useDispatch, useSelector } from "react-redux";
import { toggleThankYou, updateThankYou } from "../../redux/surveySlice";

const ThankYouPage = () => {
  const dispatch = useDispatch();
  const thankYou = useSelector((state) => state.survey.thankYou);

  const set = (field, value) => dispatch(updateThankYou({ field, value }));

  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isLottie = file.name.toLowerCase().endsWith(".json");
    const reader = new FileReader();

    reader.onload = () => {
      dispatch(updateThankYou({ field: "mediaUrl", value: reader.result }));
      dispatch(
        updateThankYou({ field: "mediaType", value: isLottie ? "lottie" : "image" })
      );
      dispatch(updateThankYou({ field: "mediaName", value: file.name }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b bg-slate-50">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Thank You Page</h2>

          <p className="text-sm text-slate-500">
            Shown after the survey is completed
          </p>
        </div>

        <input
          type="checkbox"
          checked={thankYou.enabled}
          onChange={(e) => dispatch(toggleThankYou(e.target.checked))}
          className="h-5 w-5 accent-blue-600 cursor-pointer"
        />
      </div>

      {thankYou.enabled && (
        <div className="p-6 space-y-6">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Upload Media
            </label>

            <input
              type="file"
              accept="image/png,image/jpeg,image/gif,application/json"
              onChange={handleMediaUpload}
              className="w-full text-sm text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:text-sm"
            />

            <p className="text-xs text-slate-400 mt-1">
              PNG, JPG, JPEG, GIF or Lottie (.json)
            </p>

            {thankYou.mediaUrl &&
              (thankYou.mediaType === "image" ? (
                <img
                  src={thankYou.mediaUrl}
                  alt="Thank you media"
                  className="mt-3 w-20 h-20 object-cover rounded-lg border border-slate-200"
                />
              ) : (
                <p className="text-xs text-slate-500 mt-2">
                  Lottie file: {thankYou.mediaName}
                </p>
              ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Thank You Title
            </label>

            <input
              type="text"
              value={thankYou.title}
              onChange={(e) => set("title", e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Thank You Description
            </label>

            <textarea
              rows="3"
              value={thankYou.subtitle}
              onChange={(e) => set("subtitle", e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              CTA Button Text
            </label>

            <input
              type="text"
              value={thankYou.buttonText}
              onChange={(e) => set("buttonText", e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Redirect
            </label>

            <select
              value={thankYou.redirectType}
              onChange={(e) => set("redirectType", e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="none">None</option>
              <option value="url">URL</option>
            </select>

            {thankYou.redirectType === "url" && (
              <input
                type="text"
                value={thankYou.redirectUrl}
                placeholder="https://example.com"
                onChange={(e) => set("redirectUrl", e.target.value)}
                className="mt-3 w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>

        </div>
      )}
    </div>
  );
};

export default ThankYouPage;
