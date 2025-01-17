"use client";

import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState("profile");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="container main">
            <h1>ようこそ、私のポートフォリオへ</h1>
            <div className="tab-menu">
                <button
                    className={activeTab === "profile" ? "active" : ""}
                    onClick={() => handleTabClick("profile")}
                >
                    自己紹介
                </button>
                <button
                    className={activeTab === "ml" ? "active" : ""}
                    onClick={() => handleTabClick("ml")}
                >
                    機械学習プロジェクト
                </button>
                <button
                    className={activeTab === "web" ? "active" : ""}
                    onClick={() => handleTabClick("web")}
                >
                    Webエンジニアリングプロジェクト
                </button>
                <button
                    className={activeTab === "skills" ? "active" : ""}
                    onClick={() => handleTabClick("skills")}
                >
                    スキル
                </button>
                <button
                    className={activeTab === "contact" ? "active" : ""}
                    onClick={() => handleTabClick("contact")}
                >
                    連絡先
                </button>
            </div>
            {activeTab === "profile" && (
                <div>
                    <h2>自己紹介</h2>
                    <p>
                        私は機械学習エンジニアとWebエンジニアの経験を持つエンジニアです。
                        データ分析、モデル開発、Webアプリケーション開発に情熱を注いでいます。
                    </p>
                </div>
            )}
            {activeTab === "ml" && (
                <div>
                    <h2>機械学習プロジェクト</h2>
                    <div className="project-grid">
                        <div className="project-card">
                            <h3 className="project-title">プロジェクト1</h3>
                            <p style={{ color: "var(--foreground)" }}>
                                プロジェクト1の説明
                            </p>
                        </div>
                        <div className="project-card">
                            <h3 className="project-title">プロジェクト2</h3>
                            <p style={{ color: "var(--foreground)" }}>
                                プロジェクト2の説明
                            </p>
                        </div>
                        <div className="project-card">
                            <h3 className="project-title">プロジェクト3</h3>
                            <p style={{ color: "var(--foreground)" }}>
                                プロジェクト3の説明
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "web" && (
                <div>
                    <h2 style={{ color: "var(--foreground)" }}>
                        Webエンジニアリングプロジェクト
                    </h2>
                    <div className="project-grid">
                        <div className="project-card">
                            <h3 className="project-title">プロジェクト4</h3>
                            <p style={{ color: "var(--foreground)" }}>
                                プロジェクト4の説明
                            </p>
                        </div>
                        <div className="project-card">
                            <h3 className="project-title">プロジェクト5</h3>
                            <p style={{ color: "var(--foreground)" }}>
                                プロジェクト5の説明
                            </p>
                        </div>
                        <div className="project-card">
                            <h3 className="project-title">プロジェクト6</h3>
                            <p style={{ color: "var(--foreground)" }}>
                                プロジェクト6の説明
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "skills" && (
                <div>
                    <h2>スキル</h2>
                    <div>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Next.js</span>
                        <span className="skill-tag">TensorFlow</span>
                        <span className="skill-tag">PyTorch</span>
                    </div>
                </div>
            )}
            {activeTab === "contact" && (
                <div>
                    <h2 style={{ color: "var(--foreground)" }}>連絡先</h2>
                    <p style={{ color: "var(--foreground)" }}>
                        メールアドレス: example@example.com
                    </p>
                    <p style={{ color: "var(--foreground)" }}>
                        Github: github.com/example
                    </p>
                </div>
            )}
        </div>
    );
}
