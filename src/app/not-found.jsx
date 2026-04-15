"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-500/10">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>

        <div className="flex flex-col gap-3">
          <Link href="/">
            <button className="w-full py-3 rounded-xl bg-white text-gray-900">
              Go Home
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;