import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import incubationImage from "@/assets/INCUBATION-KONNECTIK-EN.jpg.jpeg";
import merryChristmasImage from "@/assets/Merry_Christmas.jpg";
import youthDayImage from "@/assets/CMR_Youth_Day.jpeg";
import { link } from "fs";

const posts = [
  {
    tag: "Events",
    title: "Cameroon Youth Day 2026",
    excerpt:
      "We wish everyone a happy Cameroon Youth Day! Today, we celebrate the energy, creativity, and potential of our youth.",
    readTime: "1 min read",
    image: youthDayImage,
    link: "https://www.linkedin.com/posts/konnectik-cm_youthday-youthinaction-entrepreneurship-activity-7427253867345580033-2QGU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6Ht1IBwYKEvbAbZWsayYZIxVXGnVhD55I",
  },
  {
    tag: "Incubation",
    title: "Konnectik at Scale32 by Enovation Factory and UNDP",
    excerpt:
      "After +1000 applicants received, 44 preselected startups, Konnectik finds its way amongst the 16 selected startup for the incubation journey as Newbies.",
    readTime: "2 min read",
    image: incubationImage,
    link: "https://www.linkedin.com/posts/konnectik-cm_scale32-konnectik-scale32-activity-7425152514377023488-F7-8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6Ht1IBwYKEvbAbZWsayYZIxVXGnVhD55I",
  },
  {
    tag: "Events",
    title: "Merry Christmas from Konnectik!",
    excerpt:
      "In the spirit of the season, we want to extend our warmest wishes to all our users and partners. May your holidays be filled with joy, connection, and memorable moments with loved ones. Thank you for being part of the Konnectik community!",
    readTime: "1 min read",
    image: merryChristmasImage,
    link: "https://www.linkedin.com/posts/konnectik-cm_during-this-festive-season-the-activity-7409850394362728448-7c3F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6Ht1IBwYKEvbAbZWsayYZIxVXGnVhD55I",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-muted relative z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Blog
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories, updates and ideas from the Konnectik team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="bg-card border rounded-2xl overflow-hidden shadow-subtle hover:shadow-strong transition-smooth h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {post.tag}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
