import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { MonitorIcon as Running, FootprintsIcon as Walking } from "lucide-react"

interface Activity {
    id: number;
    user: {
        name: string;
        avatar: string;
        initials: string;
    };
    activityName: string;
    description: string | null;
    type: "run" | "walk";
    distance: number; // in miles
    duration: string; // in minutes:seconds
    pace: string; // min/mi
    startTime: Date; // Date object
}

const activities = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
    },
    activityName: "Morning Run",
    description: "Easy run along the river path. Felt great today!",
    type: "run",
    distance: 5.2, // in miles
    duration: "28:45", // in minutes:seconds
    pace: "5:32", // min/mi
    startTime: new Date(2023, 3, 15, 7, 30), // April 15, 2023, 7:30 AM
  },
  {
    id: 2,
    user: {
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SM",
    },
    activityName: "Interval Training",
    type: "run",
    description: null,
    distance: 7.8,
    duration: "42:15",
    pace: "5:25",
    startTime: new Date(2023, 3, 14, 18, 15), // April 14, 2023, 6:15 PM
  },
  {
    id: 3,
    user: {
      name: "Mike Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    activityName: "Long Run Sunday",
    type: "walk",
    description:
      "Weekly long run through the park and downtown. Perfect weather conditions.",
    distance: 16.5,
    duration: "1:32:20",
    pace: "5:36",
    startTime: new Date(2023, 3, 12, 8, 0), // April 12, 2023, 8:00 AM
  },
  {
    id: 4,
    user: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EW",
    },
    activityName: "Recovery Jog",
    type: "run",
    description:
      "Easy recovery run after yesterday's race. Kept it slow and relaxed.",
    distance: 4.2,
    duration: "26:30",
    pace: "6:18",
    startTime: new Date(2023, 3, 10, 16, 45), // April 10, 2023, 4:45 PM
  },
];

export default function Timeline() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id}>
          <Card className="w-full">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={activity.user.avatar || "/placeholder.svg"}
                      alt={activity.user.name}
                    />
                    <AvatarFallback>{activity.user.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{activity.user.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatDistanceToNow(activity.startTime, {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                    {activity.type === "run" ? (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <span>Run</span>
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <span>Walk</span>
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {new Date(activity.startTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Badge>
                  </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-lg">
                    {activity.activityName}
                  </h4>
                  {activity.description && (
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">
                      Distance
                    </span>
                    <span className="font-medium">{activity.distance} mi</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">
                      Duration
                    </span>
                    <span className="font-medium">{activity.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Pace</span>
                    <span className="font-medium">{activity.pace} /mi</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
