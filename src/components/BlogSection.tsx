import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    tag: "Connectivity",
    title: "Bridging the Digital Divide in African Communities",
    excerpt:
      "How hyperlocal Wi-Fi networks are transforming access to the internet across underserved regions.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
  {
    tag: "Technology",
    title: "The Multi-Tech Backbone Behind Konnectik",
    excerpt:
      "A deep dive into how fibre, 5G, LTE and satellite work together to keep you connected.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    tag: "Impact",
    title: "Empowering Small Businesses Through Affordable Internet",
    excerpt:
      "Real stories of entrepreneurs who scaled their businesses with reliable, low-cost connectivity.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
