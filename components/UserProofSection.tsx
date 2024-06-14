import React from "react";
import NumberTicker from "@/components/ui/number-ticker";

const UserProofSection = () => {
  return (
    <section className="bg-[#f3f4f6] py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="rounded-full bg-white px-12 py-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
            Déjà <NumberTicker value={1060637} className="text-blue-400" />{" "}
            images sauvées
          </div>
          <p className="max-w-md text-gray-600 md:text-lg">
            Notre technologie IA puissante a aidé des milliers d'utilisateurs à
            améliorer leurs images à de nouveaux sommets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserProofSection;
