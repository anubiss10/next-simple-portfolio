import { projects } from "@/profile";
import Link from "next/link";
import { PortfolioCard } from "./PortfolioCard";

export function Portofolio() {
  return (
    <section className="my-10">
      <h1 className="text-4xl font-bold text-center">Portfolio</h1>

      <div className="grid grid-cols-12 gap-4">
        {projects.map(({ name, description, image }, index) => (
          <PortfolioCard
            name={name}
            description={description}
            image={image}
            key={index}
          />
        ))}
      </div>

      <div className="col-md-12 mt-4">
        <div className="text-center">
          <Link href="/portfolio" className="btn btn-outline-light">
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}