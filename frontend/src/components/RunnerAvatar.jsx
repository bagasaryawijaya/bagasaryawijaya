import { motion } from 'framer-motion';
import { Footprints, Zap } from 'lucide-react';
import profile from '../assets/Muka-BagasAryaWijaya.jpg';

/*
 * ============================================================
 * RUNNER ANIMATION
 * ============================================================
 *
 * Sinkronisasi:
 *
 *   KAKI KANAN MAJU  <-->  TANGAN KIRI MAJU
 *   KAKI KIRI MAJU   <-->  TANGAN KANAN MAJU
 *
 * Semua anggota tubuh menggunakan fase yang sama.
 */

const RUN_DURATION = 0.72;

/*
 * Main running cycle.
 *
 * 0%   = kaki kanan maju
 * 25%  = transisi
 * 50%  = kaki kiri maju
 * 75%  = transisi
 * 100% = kembali ke kaki kanan maju
 */
const runTransition = {
  duration: RUN_DURATION,
  repeat: Infinity,
  ease: 'linear',
};

const smoothTransition = {
  duration: RUN_DURATION,
  repeat: Infinity,
  ease: 'easeInOut',
};

const gpuStyle = {
  willChange: 'transform',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transform: 'translateZ(0)',
};

export default function RunnerAvatar() {
  return (
    <div
      className="runner-stage"
      aria-label="Avatar Bagas sedang berlari di track running"
      style={{
        contain: 'layout style paint',
      }}
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div className="track-glow" />

      {/* =====================================================
          RUNNING TRACK
      ====================================================== */}
      <motion.div
        className="running-track"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={gpuStyle}
      >
        <div className="track-lane lane-outer" />
        <div className="track-lane lane-middle" />
        <div className="track-lane lane-inner" />

        <div className="track-dash dash-one" />
        <div className="track-dash dash-two" />
        <div className="track-dash dash-three" />
      </motion.div>

      {/* =====================================================
          ORBIT
      ====================================================== */}
      <motion.div
        className="track-orbit"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={gpuStyle}
      >
        <span />
      </motion.div>

      {/* =====================================================
          GROUND SHADOW
      ====================================================== */}
      <motion.div
        className="runner-shadow"
        animate={{
          scaleX: [1, 0.88, 1.04, 0.9, 1],
          opacity: [0.16, 0.11, 0.17, 0.12, 0.16],
        }}
        transition={smoothTransition}
        style={{
          ...gpuStyle,
          willChange: 'transform, opacity',
        }}
      />

      {/* =====================================================
          RUNNER
      ====================================================== */}
      <motion.div
        className="runner-character"
        animate={{
          y: [0, -4, 0, -3, 0],
        }}
        transition={runTransition}
        style={{
          ...gpuStyle,
          willChange: 'transform',
        }}
      >

        {/* ===================================================
            KAKI BELAKANG / KAKI KANAN
        ====================================================

            FASE:
            0%   = MAJU
            25%  = netral
            50%  = MUNDUR
            75%  = netral
            100% = MAJU

            Tangan kiri menggunakan fase yang SAMA.
        ==================================================== */}
        <motion.div
          className="runner-leg runner-leg-back"
          animate={{
            rotate: [
              42,
              10,
              -42,
              -18,
              42,
            ],
          }}
          transition={runTransition}
          style={{
            ...gpuStyle,
            transformOrigin: '50% 8%',
            zIndex: 1,
          }}
        >
          <span className="runner-knee" />
          <span className="runner-shoe" />
        </motion.div>

        {/* ===================================================
            KAKI DEPAN / KAKI KIRI
        ====================================================

            Kebalikan dari kaki kanan.

            Saat kaki kanan MAJU,
            kaki kiri MUNDUR.

            Saat kaki kanan MUNDUR,
            kaki kiri MAJU.
        ==================================================== */}
        <motion.div
          className="runner-leg runner-leg-front"
          animate={{
            rotate: [
              -42,
              -10,
              42,
              18,
              -42,
            ],
          }}
          transition={runTransition}
          style={{
            ...gpuStyle,
            transformOrigin: '50% 8%',
            zIndex: 1,
          }}
        >
          <span className="runner-knee" />
          <span className="runner-shoe" />
        </motion.div>

        {/* ===================================================
            TANGAN KIRI / BACK ARM
        ====================================================

            SAMA PERSIS dengan kaki kanan.

            Kaki kanan MAJU
                    ↓
            Tangan kiri MAJU
        ==================================================== */}
        <motion.div
          className="runner-arm runner-arm-back"
          animate={{
            rotate: [
              42,
              10,
              -42,
              -18,
              42,
            ],
          }}
          transition={runTransition}
          style={{
            ...gpuStyle,
            transformOrigin: '50% 10%',
            zIndex: 2,
          }}
        />

        {/* ===================================================
            BODY
        ==================================================== */}
        <motion.div
          className="runner-torso"
          animate={{
            rotate: [
              -2,
              1,
              -1,
              1.2,
              -2,
            ],
          }}
          transition={runTransition}
          style={{
            ...gpuStyle,
            transformOrigin: '50% 50%',
            zIndex: 4,
          }}
        >
          <div className="runner-neck" />

          <div className="runner-body">
            <div className="runner-shirt-line" />
          </div>
        </motion.div>

        {/* ===================================================
            TANGAN KANAN / FRONT ARM
        ====================================================

            Kebalikan dari tangan kiri.

            Kaki kiri MAJU
                    ↓
            Tangan kanan MAJU
        ==================================================== */}
        <motion.div
          className="runner-arm runner-arm-front"
          animate={{
            rotate: [
              -42,
              -10,
              42,
              18,
              -42,
            ],
          }}
          transition={runTransition}
          style={{
            ...gpuStyle,
            transformOrigin: '50% 10%',
            zIndex: 5,
          }}
        />

        {/* ===================================================
            HEAD
        ==================================================== */}
        <motion.div
          className="runner-head"
          animate={{
            rotate: [
              -1.5,
              1.5,
              -0.4,
              1,
              -1.5,
            ],
            y: [
              0,
              -1,
              0,
              -1,
              0,
            ],
          }}
          transition={runTransition}
          style={{
            ...gpuStyle,
            zIndex: 6,
          }}
        >
          <img
            src={profile}
            alt="Avatar Bagas Arya Wijaya"
            draggable="false"
            decoding="async"
          />
        </motion.div>
      </motion.div>

      {/* =====================================================
          TOP BADGE
      ====================================================== */}
      <motion.div
        className="runner-badge runner-badge-top"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={gpuStyle}
      >
        <Zap size={15} />
        Keep Moving
      </motion.div>

      {/* =====================================================
          BOTTOM BADGE
      ====================================================== */}
      <motion.div
        className="runner-badge runner-badge-bottom"
        animate={{
          y: [0, 3, 0],
        }}
        transition={{
          duration: 2.7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={gpuStyle}
      >
        <Footprints size={15} />
        Code • Run • Repeat
      </motion.div>
    </div>
  );
}
