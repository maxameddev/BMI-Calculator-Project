export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Xisaabiyaha BMI — Caafimaadkaaga
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            BMI waa qiyaas guud oo keliya. Ma beddelayo talada dhakhtarka.
            Haddii aad qabto walwal caafimaad, fadlan la tasho khabiir caafimaad.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 pt-2">
            &copy; {new Date().getFullYear()} Xisaabiyaha BMI. Dhammaan xuquuqda way xafidan yihiin.
          </p>
        </div>
      </div>
    </footer>
  );
}
