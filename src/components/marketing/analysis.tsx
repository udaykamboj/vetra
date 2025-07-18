import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Business intelligence  <br /><span className="font-subheading italic">dashboard</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Monitor your business performance and operational metrics with comprehensive analytics and real-time insights.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Performance Metrics
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Monitor your business performance with comprehensive analytics.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">
                                                $45,892
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +32% from last month
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Process</div>
                                            <div>Status</div>
                                            <div>Volume</div>
                                            <div>Efficiency</div>
                                        </div>
                                        {[
                                            { name: "Orders", status: "Active", reach: "1.2K", roi: "+28%" },
                                            { name: "Support", status: "Optimized", reach: "856", roi: "+45%" },
                                            { name: "Invoicing", status: "Active", reach: "2.1K", roi: "+62%" },
                                        ].map((process) => (
                                            <div key={process.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{process.name}</div>
                                                <div>{process.status}</div>
                                                <div>{process.reach}</div>
                                                <div className="font-semibold">{process.roi}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    System Analytics
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Track system performance and operational efficiency.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">98.7%</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +5% uptime improvement
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Audience Table */}
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Service</div>
                                            <div>Requests</div>
                                            <div>Response</div>
                                            <div>Success Rate</div>
                                        </div>
                                        {[
                                            { channel: "API", users: "45K", sessions: "120ms", rate: "99.8%" },
                                            { channel: "Database", users: "28K", sessions: "45ms", rate: "99.9%" },
                                            { channel: "Queue", users: "15K", sessions: "8ms", rate: "100%" },
                                        ].map((service) => (
                                            <div key={service.channel} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{service.channel}</div>
                                                <div>{service.users}</div>
                                                <div>{service.sessions}</div>
                                                <div className="font-semibold">{service.rate}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
