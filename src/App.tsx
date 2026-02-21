import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Switch } from '@/components/ui/switch'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">ח.סבן חומרי בנין</h1>
          <p className="text-muted-foreground">Welcome to WhatsApp</p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <Button>Click me</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>

          <div className="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">User Name</p>
              <p className="text-sm text-muted-foreground">user@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Switch id="airplane-mode" />
            <label htmlFor="airplane-mode">Airplane Mode</label>
          </div>

          <Input placeholder="Type something..." />

          <ScrollArea className="h-[200px] w-full border rounded-md p-4">
            <div className="space-y-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="text-sm">
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default App
