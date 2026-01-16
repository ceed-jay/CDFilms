import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-24 md:pt-40 md:pb-32 wedding-bg floral-overlay overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border-4 border-white">
              <img
                src="https://i.imgur.com/zHG43Td.png"
                alt="Cinematographer at Work"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold hidden md:block"></div>
          </div>

          <div className="space-y-8">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              Crafting Films That Echo <br />
              <span className="text-gold italic">Generations Later</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                At CDFilms, we believe that every love story is a cinematic masterpiece waiting to be told. We don't just record events; we capture the breath between the vows, the tear in a father's eye, and the unbridled joy of your first dance.
              </p>
              <p>
                Our expertise in Wedding Same Day Edits (SDE) and Prenup Films ensures that the emotion of your celebration is preserved with artistic precision and cinematic grandeur. We blend modern techniques with timeless storytelling to create legacy films for luxury weddings.
              </p>
            </div>
            <div className="flex gap-12 pt-4">
              <div>
                <p className="text-3xl font-serif text-black">150+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Weddings Filmed</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
