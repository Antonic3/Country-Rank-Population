import "../style/font.css";

export default function Footer() {
  return (
    <footer className="bg-[#1AC9FF] text-[#F9F9F9] py-6 fixed bottom-0 w-full">
      <div className="flex sm:flex-col sm:px-5 xl:flex-row xl:justify-around">
        <div className="flex flex-col gap-8">
          <p className="roboto-regular text-S">
            © 2024 Antoni Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
