import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

type Props = {
  title: string;
  items: {
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
};

export default function Category({ title, items }: Props) {
  const id = title.toLowerCase().replace(/\s+/g, "-");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section
      id={id}
      className="mb-12 mt-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8 relative">
        <span className="inline-block uppercase before:content-['🍜'] after:content-['🍜'] px-4">
          {title}
        </span>
      </h2>



      {/* ✅ Animación en cascada aquí */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6"
      >
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </motion.div>
    </motion.section>
  );
}



