import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import beforeImg from "@/assets/transform-before.jpg";
import afterImg from "@/assets/transform-after.jpg";

const transformations = [
  { before: "85 kg", after: "68 kg", name: "Ravi K.", duration: "6 months", desc: "Lost 17 kg and gained lean muscle" },
  { before: "95 kg", after: "75 kg", name: "Anita S.", duration: "8 months", desc: "Complete body transformation" },
  { before: "78 kg", after: "72 kg", name: "Deepak M.", duration: "4 months", desc: "Built strength and definition" },
  { before: "90 kg", after: "70 kg", name: "Pooja R.", duration: "7 months", desc: "Lifestyle overhaul and fitness journey" },
];

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto aspect-[4/5] rounded-xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After image (full background) */}
      <img src={afterImg} alt="After transformation" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before image (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <img src={beforeImg} alt="Before transformation" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }} />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 font-heading text-lg bg-background/70 text-foreground px-3 py-1 rounded">BEFORE</span>
      <span className="absolute top-4 right-4 font-heading text-lg bg-primary/80 text-primary-foreground px-3 py-1 rounded">AFTER</span>

      {/* Slider line & handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary-foreground">
            <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const TransformationsSection = () => {
  return (
    <section className="py-24 section-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">
            TRANSFORMATIONS
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            Real results from real members
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-lg p-6 text-center group hover:glow-border transition-all"
            >
              <div className="flex justify-center gap-4 mb-4">
                <div>
                  <p className="font-heading text-3xl text-muted-foreground">{t.before}</p>
                  <p className="font-body text-xs text-muted-foreground">BEFORE</p>
                </div>
                <div className="font-heading text-2xl text-primary self-center">→</div>
                <div>
                  <p className="font-heading text-3xl text-primary">{t.after}</p>
                  <p className="font-body text-xs text-primary">AFTER</p>
                </div>
              </div>
              <h3 className="font-heading text-xl text-foreground">{t.name}</h3>
              <p className="font-body text-sm text-muted-foreground">{t.desc}</p>
              <p className="font-body text-xs text-primary mt-2">{t.duration}</p>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-2">SEE THE DIFFERENCE</h3>
          <p className="font-body text-muted-foreground mb-8">Drag the slider to reveal the transformation</p>
          <BeforeAfterSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsSection;
