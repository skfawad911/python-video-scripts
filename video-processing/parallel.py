#####################################################################################
##
## Author: Fawad
## Date: 28-07-2024
## Work: Works same as video.py added a parallel processing feature 
## Usage: python3 parallel.py <overlay-video-path> <output-video-path> <'Text'>
##
####################################################################################




import argparse
import multiprocessing
import os
from moviepy.editor import VideoFileClip, CompositeVideoClip, concatenate_videoclips, TextClip

# Set the path to the ImageMagick binary
os.environ['IMAGEMAGICK_BINARY'] = '/usr/bin/convert'

# Position and size of the overlay video
position = (170, 250)  # Position of the overlay video (in pixels from the top-left corner)
overlay_size = (550, 550)  # Size of the overlay video (width, height)
overlay_start = 0  # Start time in seconds
overlay_duration = 10  # Duration in seconds
base_video_path = '/home/digi/mvc_python/doctor.mp4'  # Set your base video path here

def overlay_video_on_base(base_video_path, overlay_video_path, output_path, position, overlay_size, overlay_start, overlay_duration, textname):
    try:
        print(f"Processing started for {output_path}")

        base_video = VideoFileClip(base_video_path)
        overlay_video = VideoFileClip(overlay_video_path).resize(overlay_size)

        font_path = '/home/digi/mvc_python/Fonts/georgia-2-cufonfonts/georgiab.ttf'  # Update this with the correct path to your font
        text_clip = TextClip(textname, fontsize=50, color='black', font=font_path)
        text_position = (170, 810) 
        text_clip = text_clip.set_position(text_position).set_duration(overlay_duration).set_start(overlay_start)


        overlay_end = overlay_start + overlay_duration
        overlay_end = min(overlay_end, base_video.duration)
        overlay_duration = overlay_end - overlay_start

        overlay_video = overlay_video.subclip(0, overlay_duration).set_position(position)

        part1 = base_video.subclip(0, overlay_start)
        composite_clip = CompositeVideoClip([base_video.subclip(overlay_start, overlay_end).set_duration(overlay_duration),
                                             overlay_video, text_clip])
        part2 = base_video.subclip(overlay_end)

        final_video = concatenate_videoclips([part1, composite_clip, part2])

        final_video.write_videofile(output_path, codec='libx264', audio_codec='aac')
        
        print(f"Processing complete for {output_path}")
    except Exception as e:
        print(f"Error processing {output_path}: {e}")

def process_video(overlay_video_path,output_path, textname):
    # output_path = f'/home/digi/video_overlay/doctor_{textname}.mp4'
    task = {
        'base_video_path': base_video_path,
        'overlay_video_path': overlay_video_path,
        'output_path': output_path,
        'position': position,
        'overlay_size': overlay_size,
        'overlay_start': overlay_start,
        'overlay_duration': overlay_duration,
        'textname': textname
    }
    overlay_video_on_base(**task)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Overlay a video on top of another video.")
    parser.add_argument('overlay_video_path', type=str, help="Path to the overlay video file.")
    parser.add_argument('output_path', type=str, help="Path to the output video file.")
    parser.add_argument('textname', type=str, help="Text Name")
    args = parser.parse_args()

    # Create a new process for the task
    p = multiprocessing.Process(target=process_video, args=(args.overlay_video_path,args.output_path, args.textname))
    p.start()
    p.join()
