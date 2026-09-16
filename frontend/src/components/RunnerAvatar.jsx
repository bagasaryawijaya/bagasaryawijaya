import { motion } from 'framer-motion';
import { Footprints, Zap } from 'lucide-react';
import profile from '../assets/Muka-BagasAryaWijaya.jpg';

const runEase = [0.42, 0, 0.58, 1];

const runTransition = {
  duration: 0.78,
  repeat: Infinity,
  ease: runEase,
};

export default function RunnerAvatar() {
  return (
    <div
      className="runner-stage"
      aria-label="Avatar Bagas sedang berlari di track running"
    >
      {/* Background glow */}
      <div className="track-glow" />

      {/* Running track */}
      <motion.div
        className="running-track"
        animate={{ rotate: 360 }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="track-lane lane-outer" />
        <div className="track-lane lane-middle" />
        <div className="track-lane lane-inner" />

        <div className="track-dash dash-one" />
        <div className="track-dash dash-two" />
        <div className="track-dash dash-three" />
      </motion.div>

      {/* Orbit */}
      <motion.div
        className="track-orbit"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span />
      </motion.div>

      {/* Ground shadow */}
      <motion.div
        className="runner-shadow"
        animate={{
          scaleX: [1, 0.84, 1.06, 0.9, 1],
          opacity: [0.17, 0.1, 0.18, 0.11, 0.17],
        }}
        transition={{
          duration: 0.78,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =========================
          RUNNER
      ========================== */}
      <motion.div
        className="runner-character"
        animate={{
          y: [0, -5, 0, -4, 0],
          rotate: [-1.2, 0.8, -0.3, 0.7, -1.2],
        }}
        transition={runTransition}
      >
        {/* =========================
            LEGS
            Ditaruh SEBELUM badan supaya
            secara visual berada di belakang.
        ========================== */}

        {/* Back leg */}
        <motion.div
          className="runner-leg runner-leg-back"
          animate={{
            // Right leg moves forward while left arm moves forward.
            rotate: [42, 12, -42, -18, 42],
          }}
          transition={runTransition}
          style={{
            transformOrigin: '50% 8%',
            zIndex: 1,
          }}
        >
          <span className="runner-knee" />
          <span className="runner-shoe" />
        </motion.div>

        {/* Front leg */}
        <motion.div
          className="runner-leg runner-leg-front"
          animate={{
            // Left leg moves forward while right arm moves forward.
            rotate: [-38, 8, 40, 14, -38],
          }}
          transition={runTransition}
          style={{
            transformOrigin: '50% 8%',
            zIndex: 1,
          }}
        >
          <span className="runner-knee" />
          <span className="runner-shoe" />
        </motion.div>

        {/* =========================
            BACK ARM
        ========================== */}
        <motion.div
          className="runner-arm runner-arm-back"
          animate={{
            // Left arm: forward at the same time as the right leg.
            rotate: [-34, 20, 36, -18, -34],
          }}
          transition={runTransition}
          style={{
            transformOrigin: '50% 10%',
            zIndex: 2,
          }}
        />

        {/* =========================
            BODY
        ========================== */}
        <motion.div
          className="runner-torso"
          animate={{
            rotate: [-2, 1, -1, 1.5, -2],
            scaleY: [1, 1.015, 1, 1.01, 1],
          }}
          transition={runTransition}
          style={{
            zIndex: 4,
          }}
        >
          <div className="runner-neck" />

          <div className="runner-body">
            <div className="runner-shirt-line" />
          </div>
        </motion.div>

        {/* =========================
            FRONT ARM
        ========================== */}
        <motion.div
          className="runner-arm runner-arm-front"
          animate={{
            // Right arm: opposite the left arm and synchronized with left leg.
            rotate: [30, -36, 32, -30, 30],
          }}
          transition={runTransition}
          style={{
            transformOrigin: '50% 10%',
            zIndex: 5,
          }}
        />

        {/* =========================
            HEAD
        ========================== */}
        <motion.div
          className="runner-head"
          animate={{
            rotate: [-1.5, 1.8, -0.4, 1.1, -1.5],
            y: [0, -1, 0, -1, 0],
          }}
          transition={runTransition}
          style={{
            zIndex: 6,
          }}
        >
          <img
            src={profile}
            alt="Avatar Bagas Arya Wijaya"
          />
        </motion.div>
      </motion.div>

      {/* =========================
          BADGES
      ========================== */}

      <motion.div
        className="runner-badge runner-badge-top"
        animate={{
          y: [0, -5, 0],
          rotate: [4, 2, 4],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Zap size={15} />
        Keep Moving
      </motion.div>

      <motion.div
        className="runner-badge runner-badge-bottom"
        animate={{
          y: [0, 4, 0],
          rotate: [-4, -2, -4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Footprints size={15} />
        Code • Run • Repeat
      </motion.div>
    </div>
  );
}