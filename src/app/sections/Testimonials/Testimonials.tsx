export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container mx-auto container-x-padding"
    >
      <h2 className="text-4xl font-bold mb-8 text-elcare-purple-600 text-center md:text-left">
        Opinie
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-elcare-cream-100 flex items-center justify-center">
          <span className="text-5xl"></span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex-1">
          <p className="text-lg text-elcare-purple-600 mb-2">
            "Nasz maluch teraz śpi przez całą noc, a my czujemy się jak nowi
            rodzice!"
          </p>
          <div className="text-elcare-purple-500 font-semibold">
            Anna, mama Jasia
          </div>
        </div>
      </div>
    </section>
  );
}
