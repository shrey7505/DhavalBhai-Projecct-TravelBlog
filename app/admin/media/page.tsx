"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload, Copy, Check, Loader2 } from "lucide-react";
import type { Metadata } from "next";

export default function MediaPage() {
  const [uploads, setUploads] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    setError("");
    try {
      for (const file of Array.from(files)) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Upload failed");
        setUploads((prev) => [data.url, ...prev]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(window.location.origin + url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>
          Media Library
        </h1>
        <p className="text-gray-500 text-sm mt-0.5">Upload and manage images for your posts.</p>
      </div>

      {/* Upload zone */}
      <label className="block mb-6 cursor-pointer">
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center hover:border-navy hover:bg-gray-50 transition-colors">
          {uploading ? (
            <div className="flex flex-col items-center gap-3 text-navy">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p className="text-sm font-semibold">Uploading…</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <Upload className="w-10 h-10" />
              <div>
                <p className="text-sm font-semibold text-gray-600">Click or drag images here to upload</p>
                <p className="text-xs mt-1">JPEG, PNG, WebP, GIF — max 5 MB each</p>
              </div>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </label>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
          {error}
        </div>
      )}

      {uploads.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-gray-700 mb-4">Uploaded this session</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {uploads.map((url) => (
              <div key={url} className="group relative bg-gray-100 rounded-xl overflow-hidden aspect-square">
                <Image src={url} alt="" fill className="object-cover" sizes="150px" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <button
                    onClick={() => copyUrl(url)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 bg-white text-navy text-xs font-bold px-3 py-1.5 rounded-full"
                  >
                    {copied === url ? (
                      <>
                        <Check className="w-3 h-3 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy URL
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
