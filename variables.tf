variable "instructions" {
  description = "Instructions for warming Lambda Functions"
  type = "list(object({ name = string, payload = string, concurrency = number, rate = number }))"
}
